export default function SideBar({ onAddProject, projects }) {
  function handleProjectClick(title) {
    alert(title);
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
