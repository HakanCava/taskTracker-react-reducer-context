import { useState } from "react";

const AddTask = ({ showbar, inputRef, dispatch }) => {
  const [task, setTask] = useState({
    name:"",
    date:"",
   
  });

const handleChange=(e)=>{
  setTask({...task,[e.target.id]:e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || task.name.trim().length < 1) return;

    const newTask = {
      id: Math.floor(Math.random() * 999999999),
      name:task.name,
      date:task.date,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
    setTask({
        name:"",
        date:"",
      
      });
  };
  return (
    <div className="container row m-auto  justify-content-center">
      {showbar ? (
        <form
          onSubmit={handleSubmit}
          className="row gap-2 justify-content-center m-2 p-2  w-75 rounded-3 "
        >
          <label htmlFor="name">Task</label>
          <input
            type="text"
            className="form-control w-50 text-center"
            id="name"
            placeholder="AddTask"
            ref={inputRef}
            onChange={handleChange}
            value={task.name}
            required
          />
          <label htmlFor="date">Day & Time</label>
          <input
            type="datetime-local"
            className="form-control w-50 text-center "
            id="date"
            placeholder="Add Day & Time"
            onChange={handleChange}
            value={task.date}
            required
          />
          <div>
            <button className="btn save-bar text-white w-25  ">
              Save Task
            </button>
          </div>
        </form>
      ) : (
        null
      )}
    </div>
  );
};

export default AddTask;
