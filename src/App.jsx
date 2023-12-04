import { useState } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  const [projects, setProjects] = useState([]);
  const [addProject, setAddProject] = useState(false);
  const [selectProject, setSelectProject] = useState(-1);

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
        tasks: [],
      },
    ]);
    setAddProject(false);
    setSelectProject(-1);
  }

  function handleSelectProject(index) {
    setSelectProject(index);
  }

  function removeProject(index) {
    setProjects((prevProjects) => prevProjects.toSpliced(index, 1));
    setSelectProject(-1);
  }

  function addTask(task, index) {
    setProjects((prevProjects) => {
      let tempProjects = [...prevProjects];
      tempProjects[index].tasks.push(task);
      return tempProjects;
    });
  }

  console.log(projects);

  return (
    <div className="flex">
      <SideBar
        onAddProject={handleAddProject}
        projects={projects}
        onSelectProject={handleSelectProject}
      />
      <Home
        projects={projects}
        onAddProject={addProject}
        onSaveNewProject={saveNewProject}
        selectedProject={selectProject}
        onRemoveProject={removeProject}
        onAddTask={addTask}
      />
    </div>
  );
}

export default App;
