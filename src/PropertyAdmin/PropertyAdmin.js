import React, { useEffect, useState } from "react";
import "./PropertyAdmin.css";

const emptyForm = {
  title: "",
  category: "Buy",
  type: "Residential",
  location: "",
  price: "",
  image: "",
  description: "",
};

const PropertyAdmin = () => {

  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {

    const saved = localStorage.getItem("niss_properties");

    if (saved) {
      setProperties(JSON.parse(saved));
    }

  }, []);

  const saveProperties = (data) => {

    setProperties(data);

    localStorage.setItem(
      "niss_properties",
      JSON.stringify(data)
    );

    // same page ke components ko update karne ke liye
    window.dispatchEvent(new Event("niss-properties-updated"));

  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const addProperty = (e) => {

    e.preventDefault();

    if (
      !form.title ||
      !form.location ||
      !form.price ||
      !form.image
    ) {

      setMessage("Please fill all required fields.");

      setTimeout(() => setMessage(""), 2500);

      return;
    }

    if (editingId) {

      const updated = properties.map((property) =>
        property.id === editingId
          ? {
              ...property,
              ...form,
            }
          : property
      );

      saveProperties(updated);

      setEditingId(null);

      setMessage("Property updated successfully!");

    } else {

      const newProperty = {
        id: Date.now(),
        ...form,
      };

      saveProperties([
        ...properties,
        newProperty,
      ]);

      setMessage("Property added successfully!");

    }

    setForm(emptyForm);

    setTimeout(() => setMessage(""), 2500);
  };

  const editProperty = (property) => {

    setForm({
      title: property.title,
      category: property.category,
      type: property.type,
      location: property.location,
      price: property.price,
      image: property.image,
      description: property.description,
    });

    setEditingId(property.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const deleteProperty = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    const updated = properties.filter(
      (property) => property.id !== id
    );

    saveProperties(updated);

    setMessage("Property deleted.");

    setTimeout(() => setMessage(""), 2000);
  };

  const cancelEdit = () => {

    setEditingId(null);
    setForm(emptyForm);

  };

  return (

    <div className="property-admin">

      {/* HEADER */}

      <div className="admin-header">

        <div>
          <span>NISS PROPERTY</span>

          <h1>
            Staff Property Panel
          </h1>

          <p>
            Add, edit and manage properties
          </p>
        </div>

        <div className="admin-count">
          <strong>
            {properties.length}
          </strong>

          <span>
            Properties
          </span>
        </div>

      </div>

      {message && (
        <div className="admin-message">
          {message}
        </div>
      )}

      {/* FORM */}

      <section className="property-form-section">

        <h2>
          {editingId
            ? "Edit Property"
            : "Add New Property"}
        </h2>

        <form onSubmit={addProperty}>

          <div className="form-grid">

            <div className="form-group">

              <label>
                Property Title *
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Example: Luxury 3 BHK House"
              />

            </div>

            <div className="form-group">

              <label>
                Category *
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
              >

                <option value="Buy">
                  Buy
                </option>

                <option value="Sell">
                  Sell
                </option>

                <option value="Rent">
                  Rent
                </option>

                <option value="PG">
                  PG
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Plot">
                  Plot / Land
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Property Type
              </label>

              <select
                name="type"
                value={form.type}
                onChange={handleChange}
              >

                <option value="Residential">
                  Residential
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="PG">
                  PG
                </option>

                <option value="Land">
                  Land / Plot
                </option>

                <option value="Shop">
                  Shop
                </option>

                <option value="Office">
                  Office
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Location *
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Example: Ghaziabad, UP"
              />

            </div>

            <div className="form-group">

              <label>
                Price *
              </label>

              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Example: ₹45 Lakh"
              />

            </div>

            <div className="form-group">

              <label>
                Image URL *
              </label>

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Paste image URL"
              />

            </div>

          </div>

          <div className="form-group">

            <label>
              Property Description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write property details..."
              rows="4"
            />

          </div>

          <div className="form-buttons">

            <button
              type="submit"
              className="save-property"
            >
              {editingId
                ? "Update Property"
                : "Add Property"}
            </button>

            {editingId && (

              <button
                type="button"
                className="cancel-edit"
                onClick={cancelEdit}
              >
                Cancel
              </button>

            )}

          </div>

        </form>

      </section>

      {/* PROPERTY TABLE */}

      <section className="admin-property-list">

        <div className="list-title">

          <div>
            <span>MANAGE LISTINGS</span>

            <h2>
              All Properties
            </h2>
          </div>

        </div>

        <div className="admin-table-wrapper">

          <table>

            <thead>

              <tr>

                <th>Image</th>
                <th>Property</th>
                <th>Category</th>
                <th>Location</th>
                <th>Price</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {properties.map((property) => (

                <tr key={property.id}>

                  <td>

                    <img
                      src={property.image}
                      alt={property.title}
                    />

                  </td>

                  <td>

                    <strong>
                      {property.title}
                    </strong>

                    <small>
                      {property.type}
                    </small>

                  </td>

                  <td>

                    <span className="category-badge">
                      {property.category}
                    </span>

                  </td>

                  <td>
                    {property.location}
                  </td>

                  <td>
                    {property.price}
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          editProperty(property)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteProperty(property.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </div>

  );
};

export default PropertyAdmin;