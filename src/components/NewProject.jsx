import Input from "./Input";

function NewProject() {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className=" px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input textarea label="Description" />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

export default NewProject;
