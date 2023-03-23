import { useState,useRef, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useTaskLayerValue } from "./context/TaskContext";

function App() {
  const [showbar,setShowbar]=useState(true)
const inputRef=useRef(null)
const [{tasks},dispatch]=useTaskLayerValue()
// console.log(tasks);

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

  return (
    <div className="d-flex  flex-column align-items-center">
    <Header showbar={showbar} setShowbar={setShowbar} />
    <AddTask showbar={showbar} dispatch={dispatch} inputRef={inputRef}/>
    <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
