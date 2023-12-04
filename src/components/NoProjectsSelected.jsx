import noProjectLogo from "../assets/no-projects.png";

export default function NoProjectsSelected() {
  return (
    <section>
      <img src={noProjectLogo} className=" object-contain w-12" />
      <h2 className=" text-xl">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <button>Create new project</button>
    </section>
  );
}
