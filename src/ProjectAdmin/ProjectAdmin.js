import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import "./ProjectAdmin.css";

const emptyForm = {
  projectName: "",
  developer: "",
  stage: "past",
  propertyType: "High Rise",
  location: "",
  units: "",
  configuration: "",
  sizeFrom: "",
  sizeTo: "",
  priceFrom: "",
  priceTo: "",
  year: "",
  imageUrl: "",
  description: "",
};

function ProjectAdmin() {
  const [form, setForm] = useState(emptyForm);
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

//   const loadProjects = async () => {
//     try {
//       setLoading(true);

//       const projectsRef = collection(db, "projects");
//       const q = query(projectsRef, orderBy("createdAt", "desc"));

//       const snapshot = await getDocs(q);

//       const data = snapshot.docs.map((item) => ({
//         id: item.id,
//         ...item.data(),
//       }));

//       setProjects(data);
//     } catch (error) {
//       console.error("Error loading projects:", error);
//       setMessage("Projects load nahi ho pa rahe.");
//     } finally {
//       setLoading(false);
//     }
//   };

const loadProjects = async () => {
  try {
    setLoading(true);
    setMessage("");

    const projectsRef = collection(db, "projects");

    const snapshot = await getDocs(projectsRef);

    const data = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    // Newest first
    data.sort((a, b) => {
      const dateA = a.createdAt?.seconds || 0;
      const dateB = b.createdAt?.seconds || 0;

      return dateB - dateA;
    });

    setProjects(data);
  } catch (error) {
    console.error("Error loading projects:", error);

    setProjects([]);

    // Page ko error state mein mat rakho
    setMessage("");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.projectName.trim()) {
      setMessage("Project Name required hai.");
      return;
    }

    if (!form.location.trim()) {
      setMessage("Location required hai.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      if (editingId) {
        const projectRef = doc(db, "projects", editingId);

        await updateDoc(projectRef, {
          ...form,
          updatedAt: serverTimestamp(),
        });

        setMessage("Project successfully updated.");
      } else {
        await addDoc(collection(db, "projects"), {
          ...form,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });

        setMessage("Project successfully added.");
      }

      setForm(emptyForm);
      setEditingId(null);

      await loadProjects();
    } catch (error) {
      console.error("Firebase error:", error);
      setMessage("Project save nahi hua. Firebase check karein.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);

    setForm({
      projectName: project.projectName || "",
      developer: project.developer || "",
      stage: project.stage || "past",
      propertyType: project.propertyType || "High Rise",
      location: project.location || "",
      units: project.units || "",
      configuration: project.configuration || "",
      sizeFrom: project.sizeFrom || "",
      sizeTo: project.sizeTo || "",
      priceFrom: project.priceFrom || "",
      priceTo: project.priceTo || "",
      year: project.year || "",
      imageUrl: project.imageUrl || "",
      description: project.description || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await deleteDoc(doc(db, "projects", id));

      setMessage("Project deleted successfully.");

      await loadProjects();
    } catch (error) {
      console.error("Delete error:", error);
      setMessage("Project delete nahi hua.");
    } finally {
      setLoading(false);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
  };

  const formatStage = (stage) => {
    if (stage === "ongoing") return "Ongoing";
    if (stage === "future") return "Future";
    return "Past";
  };

  return (
    <div className="project-admin-page">

      <div className="project-admin-hero">
        <div>
          <span>REHOUSE REALTORS</span>
          <h1>Project Administration</h1>
          <p>
            Manage your Past, Ongoing and Future real estate projects
            directly from one place.
          </p>
        </div>
      </div>

      <div className="project-admin-container">

        <div className="project-admin-form-card">

          <div className="form-heading">
            <div>
              <span>
                {editingId ? "EDIT PROJECT" : "ADD NEW PROJECT"}
              </span>

              <h2>
                {editingId
                  ? "Update Project Details"
                  : "Create Project"}
              </h2>
            </div>

            {editingId && (
              <button
                type="button"
                className="cancel-edit-btn"
                onClick={cancelEdit}
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group full">
                <label>Project Name *</label>
                <input
                  type="text"
                  name="projectName"
                  value={form.projectName}
                  onChange={handleChange}
                  placeholder="e.g. Elevate Heights"
                />
              </div>

              <div className="form-group">
                <label>Developer / Builder</label>
                <input
                  type="text"
                  name="developer"
                  value={form.developer}
                  onChange={handleChange}
                  placeholder="Developer name"
                />
              </div>

              <div className="form-group">
                <label>Project Stage *</label>

                <select
                  name="stage"
                  value={form.stage}
                  onChange={handleChange}
                >
                  <option value="past">Past Project</option>
                  <option value="ongoing">Ongoing / Present</option>
                  <option value="future">Future Project</option>
                </select>
              </div>

              <div className="form-group">
                <label>Property Type</label>

                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                >
                  <option value="High Rise">High Rise</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Plot">Plot</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Retail">Retail / Shop</option>
                  <option value="Office">Office</option>
                  <option value="Township">Township</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location *</label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Noida / Delhi NCR"
                />
              </div>

              <div className="form-group">
                <label>Total Units</label>

                <input
                  type="text"
                  name="units"
                  value={form.units}
                  onChange={handleChange}
                  placeholder="e.g. 240 Units"
                />
              </div>

              <div className="form-group">
                <label>Configuration</label>

                <input
                  type="text"
                  name="configuration"
                  value={form.configuration}
                  onChange={handleChange}
                  placeholder="2 BHK / 3 BHK / 4 BHK"
                />
              </div>

              <div className="form-group">
                <label>Size From</label>

                <input
                  type="text"
                  name="sizeFrom"
                  value={form.sizeFrom}
                  onChange={handleChange}
                  placeholder="e.g. 1100 sq.ft."
                />
              </div>

              <div className="form-group">
                <label>Size To</label>

                <input
                  type="text"
                  name="sizeTo"
                  value={form.sizeTo}
                  onChange={handleChange}
                  placeholder="e.g. 2400 sq.ft."
                />
              </div>

              <div className="form-group">
                <label>Price From</label>

                <input
                  type="text"
                  name="priceFrom"
                  value={form.priceFrom}
                  onChange={handleChange}
                  placeholder="e.g. ₹85 Lakh"
                />
              </div>

              <div className="form-group">
                <label>Price To</label>

                <input
                  type="text"
                  name="priceTo"
                  value={form.priceTo}
                  onChange={handleChange}
                  placeholder="e.g. ₹2.5 Cr"
                />
              </div>

              <div className="form-group">
                <label>Project Year</label>

                <input
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="e.g. 2024"
                />
              </div>

              <div className="form-group full">
                <label>Project Image URL</label>

                <input
                  type="url"
                  name="imageUrl"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div className="form-group full">
                <label>Project Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write project details..."
                />
              </div>

            </div>

            <button
              type="submit"
              className="save-project-btn"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : editingId
                ? "Update Project"
                : "Add Project"}
            </button>

          </form>

          {message && (
            <div className="admin-message">
              {message}
            </div>
          )}

        </div>

        <div className="projects-list-section">

          <div className="projects-list-heading">
            <div>
              <span>FIRESTORE PROJECTS</span>
              <h2>All Projects</h2>
            </div>

            <strong>
              {projects.length} Projects
            </strong>
          </div>

          {loading && projects.length === 0 ? (
            <div className="empty-projects">
              Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="empty-projects">
              <h3>No Projects Added Yet</h3>
              <p>
                Add your first project using the form above.
              </p>
            </div>
          ) : (
            <div className="admin-project-grid">

              {projects.map((project) => (

                <div
                  className="admin-project-card"
                  key={project.id}
                >

                  <div className="admin-project-image">

                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.projectName}
                      />
                    ) : (
                      <div className="image-placeholder">
                        REHOUSE
                      </div>
                    )}

                    <span className={`stage-badge ${project.stage}`}>
                      {formatStage(project.stage)}
                    </span>

                  </div>

                  <div className="admin-project-content">

                    <span className="project-type">
                      {project.propertyType}
                    </span>

                    <h3>{project.projectName}</h3>

                    <p className="project-location">
                      {project.location}
                    </p>

                    {project.developer && (
                      <p>
                        <strong>Developer:</strong>{" "}
                        {project.developer}
                      </p>
                    )}

                    {project.units && (
                      <p>
                        <strong>Units:</strong>{" "}
                        {project.units}
                      </p>
                    )}

                    {project.configuration && (
                      <p>
                        <strong>Configuration:</strong>{" "}
                        {project.configuration}
                      </p>
                    )}

                    {(project.sizeFrom || project.sizeTo) && (
                      <p>
                        <strong>Size:</strong>{" "}
                        {project.sizeFrom || "-"}{" "}
                        {project.sizeTo
                          ? ` - ${project.sizeTo}`
                          : ""}
                      </p>
                    )}

                    {(project.priceFrom || project.priceTo) && (
                      <p>
                        <strong>Price:</strong>{" "}
                        {project.priceFrom || "-"}{" "}
                        {project.priceTo
                          ? ` - ${project.priceTo}`
                          : ""}
                      </p>
                    )}

                    <div className="admin-card-actions">

                      <button
                        type="button"
                        onClick={() => handleEdit(project)}
                        className="edit-project-btn"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(project.id)}
                        className="delete-project-btn"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectAdmin;