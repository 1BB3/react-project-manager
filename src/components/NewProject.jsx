import { useRef } from "react";

export default function NewProject({ onSaveNewProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    onSaveNewProject(
      title.current.value,
      description.current.value,
      dueDate.current.value
    );
  }

  return (
    <section>
      <div>
        <button>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <p>
          <label>Title : </label>
          <input ref={title} type="text" />
        </p>
        <p>
          <label>Description : </label>
          <textarea ref={description} />
        </p>
        <p>
          <label>Due Date : </label>
          <input ref={dueDate} type="date" />
        </p>
      </div>
    </section>
  );
}
