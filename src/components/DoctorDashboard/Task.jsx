import TaskDropdown from "./TaskDropdown";

export default function Task(props) {
  async function handleChange(event) {
    const { name, type, value, checked } = event.target;

    const updatedTask = {
      ...props,
      [name]: type === "checkbox" ? checked : value,
    };

    props.onUpdate(updatedTask);
  }

  function deleteTask() {
    props.onDelete();
  }

  return (
    <div className={`bg-gray-100 rounded p-4 ${props.className}`}>
      <label className="grid grid-cols-12 items-center gap-x-3 cursor-pointer">
        <input
          type="checkbox"
          name="completed"
          checked={props.completed}
          onChange={handleChange}
          className="border-gray-300 rounded p-3"
          data-testid="completedCheckbox"
        />
        <div className="col-span-7">
          <span className="font-bold">
            {props.completed ? "Successfully Completed" : "Not completed"}
          </span>
          <p>{props.content}</p>
        </div>
        <span className="italic col-span-3">
          {new Date(props.deadline).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <TaskDropdown onDelete={deleteTask} />
      </label>
    </div>
  );
}
