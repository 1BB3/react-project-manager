export default function SideBar({ onAddProject, projects, onSelectProject }) {
  function handleProjectClick(title) {
    const index = projects.findIndex((project) => project.title === title);
    onSelectProject(index);
  }

  return (
    <section>
      <div>
        <h1 className=" text-2xl">Your Projects</h1>
      </div>
      <div>
        <button onClick={onAddProject}>+ Add Project</button>
      </div>
      <ul>
        {projects.map((project) => (
          <li
            onClick={() => handleProjectClick(project.title)}
            key={project.title}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
