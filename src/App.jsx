import { useState } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  const [projects, setProjects] = useState([]);
  const [addProject, setAddProject] = useState(false);

  function handleAddProject() {
    setAddProject(true);
  }

  function saveNewProject(title, description, dueDate) {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        title: title,
        description: description,
        dueDate: dueDate,
      },
    ]);
    setAddProject(false);
  }
  console.log(projects);

  return (
    <div className="flex">
      <SideBar onAddProject={handleAddProject} projects={projects} />
      <Home
        projects={projects}
        onAddProject={addProject}
        onSaveNewProject={saveNewProject}
      />
    </div>
  );
}

export default App;
