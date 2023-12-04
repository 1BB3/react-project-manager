import NewProject from "./NewProject";
import NoProjectsSelected from "./NoProjectsSelected";
import SelectProject from "./SelectProject";

export default function Home({
  projects,
  onAddProject,
  onSaveNewProject,
  selectedProject,
  onRemoveProject,
  onAddTask,
}) {
  let content = <NoProjectsSelected />;
  if (onAddProject)
    content = <NewProject onSaveNewProject={onSaveNewProject} />;
  else if (selectedProject !== -1)
    content = (
      <SelectProject
        projects={projects}
        theProject={selectedProject}
        onRemoveProject={onRemoveProject}
        onAddTask={onAddTask}
      />
    );
  else content = <NoProjectsSelected />;

  return <>{content}</>;
}
