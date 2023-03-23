import Task from "./Task"

const TaskList = ({tasks}) => {
  return (
    <ul className=" list-group w-50 mt-2  p-1 d-flex  flex-column align-items-center">
        {
        tasks?.map((item)=><Task item={item} key={item.id}/>)}
    </ul>
  )
}

export default TaskList