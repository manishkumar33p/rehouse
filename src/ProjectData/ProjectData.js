import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

/*
=========================================================
REHOUSE PROJECT DATA SERVICE

Any page can use this same Firebase project data.

Example:
Our Journey
Home
Properties
Project Details
etc.
=========================================================
*/

export const subscribeToProjects = (callback, onError) => {
  const projectsRef = collection(db, "projects");

  const unsubscribe = onSnapshot(
    projectsRef,
    (snapshot) => {
      const projects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      projects.sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;

        return bTime - aTime;
      });

      callback(projects);
    },
    (error) => {
      console.error("Project Firebase Error:", error);

      if (onError) {
        onError(error);
      }
    }
  );

  return unsubscribe;
};


/*
=========================================================
STAGE HELPERS
=========================================================
*/

export const getPastProjects = (projects = []) => {
  return projects.filter(
    (project) =>
      String(project.stage || "").toLowerCase() === "past"
  );
};

export const getOngoingProjects = (projects = []) => {
  return projects.filter(
    (project) =>
      String(project.stage || "").toLowerCase() === "ongoing"
  );
};

export const getFutureProjects = (projects = []) => {
  return projects.filter(
    (project) =>
      String(project.stage || "").toLowerCase() === "future"
  );
};