import clsx from "clsx";
import { useState } from "react";
import { GrFormClose, GrFormCheckmark, GrFormEdit } from "react-icons/gr";
import { useTaskLayerValue } from "../context/TaskContext";

const Task = ({ item }) => {
  const { id, name, date, isCompleted } = item;
  const [, dispatch] = useTaskLayerValue();
  const [editable, setEditable] = useState(false);
  const [task, setTask] = useState(item);

  // console.log(item);
  // console.log(task);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.id]: e.target.value });
  };

  const completeTask = (taskId) => {
    console.log(isCompleted);
    console.log(taskId);
    dispatch({
      type: "COMPLETE_TODO",
      payload: taskId,
    });
  };
  const removeTask = (taskId) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: taskId,
    });
  };

  const updateTask = ({ taskId, newName, newDate }) => {
    console.log(taskId);
    dispatch({
      type: "UPDATE_TASK",
      payload: {
        taskId,
        newName,
        newDate,
      },
    });
  };

  const taskStyle = clsx({
    ["list-group-item mb-2 text-white w-75 d-flex justify-content-around"]: true,
    ["completed"]: isCompleted,
  });

  return (
    // <li className={`list-group-item mb-2 text-white w-75 d-flex justify-content-around ${isCompleted&&"completed"}`}>
    <li className={taskStyle}>
      <div
        className="p-2 m-1 w-100"
        role="button"
        onClick={() => (editable ? "" : completeTask(id))}
      >
        {editable ? (
          <div>
            <input
              type="text"
              className="form-control w-50 text-center"
              id="name"
              placeholder="AddTask"
              onChange={handleChange}
              value={task.name}
              required
            />
            <input
              type="datetime-local"
              className="form-control w-50 text-center "
              id="date"
              placeholder="Add Day & Time"
              onChange={handleChange}
              value={task.date}
              required
            />
          </div>
        ) : (
          <div>
            <p>{name}</p>
            <div>
              <p>Date:{new Date(date).toLocaleDateString()}</p>
              <p>Time:{new Date(date).toLocaleTimeString()}</p>
            </div>
          </div>
        )}
      </div>
      <div className="border d-flex align-items-center gap-1">
        <GrFormClose
          className="fs-3 bg-danger"
          role="button"
          onClick={() => removeTask(id)}
        />
        {editable ? (
          <GrFormCheckmark
            className="fs-3 bg-success"
            role="button"
            onClick={() => {
              updateTask({
                taskId: task.id,
                newName: task.name,
                newDate: task.date,
              });
              setEditable(false);
            }}
          />
        ) : (
          <GrFormEdit
            className="fs-3 bg-warning"
            role="button"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </li>
  );
};

export default Task;
