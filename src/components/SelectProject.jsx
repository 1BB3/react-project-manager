import { useRef } from "react";

export default function SelectProject({
  projects,
  theProject,
  onRemoveProject,
  onAddTask,
}) {
  const task = useRef();

  function handleRemove() {
    onRemoveProject(theProject);
  }

  function handleAddTask() {
    onAddTask(task.current.value, theProject);
  }

  return (
    <section>
      <div>
        <p>{projects[theProject].title}</p>
        <button onClick={handleRemove}>Delete</button>
      </div>
      <div>
        <p>{projects[theProject].description}</p>
      </div>
      <div>
        <p>{projects[theProject].dueDate}</p>
      </div>
      <div>
        <h2>Tasks</h2>
        <input ref={task} type="text" />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {projects.map((project) =>
            project.tasks.map((task) => <li key={task}>{task}</li>)
          )}
        </ul>
      </div>
    </section>
  );
}
