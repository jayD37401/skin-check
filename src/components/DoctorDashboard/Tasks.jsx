import { useState, useEffect } from "react";
import TaskEditModal from "./TaskEditModal";
import Task from "./Task";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      content: "Static Task 1",
      completed: false,
      deadline: "2023-06-30",
    },
    {
      _id: "2",
      content: "Static Task 2",
      completed: true,
      deadline: "2023-07-15",
    },
  ]);
  const [editingTask, setEditingTask] = useState(false);

  function addTask(task) {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  function updateTask(updatedTask) {
    setTasks((oldTasks) =>
      oldTasks.map((oldTask) =>
        oldTask._id === updatedTask._id ? updatedTask : oldTask
      )
    );
  }

  function deleteTask(taskToDelete) {
    setTasks((oldTasks) => oldTasks.filter((task) => task !== taskToDelete));
  }

  return (
    <>
      <div className="bg-white rounded p-4">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-bold">Tasks</h3>
          <button
            className="text-indigo-600 border border-gray-300 rounded px-2 py-1 ml-auto hover:bg-gray-50"
            onClick={() => setEditingTask(true)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {tasks?.map((task, index) => (
          <Task
            key={task._id}
            {...task}
            className={index === tasks.length - 1 ? "" : "mb-4"}
            onUpdate={(updatedTask) => updateTask(updatedTask)}
            onDelete={() => deleteTask(task)}
          />
        ))}
      </div>
      <TaskEditModal
        open={editingTask}
        onSubmit={(task) => addTask(task)}
        onClose={() => setEditingTask(false)}
      />
    </>
  );
}
