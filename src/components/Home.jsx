import NewProject from "./NewProject";
import NoProjectsSelected from "./NoProjectsSelected";

export default function Home({ projects, onAddProject, onSaveNewProject }) {
  return (
    <>
      {!onAddProject ? <NoProjectsSelected /> : undefined}
      {onAddProject && <NewProject onSaveNewProject={onSaveNewProject} />}
    </>
  );
}
