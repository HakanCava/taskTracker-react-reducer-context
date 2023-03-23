import clsx from "clsx";

const Button = ({showbar,setShowbar}) => {
 
const barStyle=clsx({
    ["btn btn-danger bar"]:true,
    ["bar-btn"]:showbar
})

  return (
    <div className="my-2">
        <button className={barStyle} onClick={()=>setShowbar(!showbar)}>
        {showbar?"Close Add Task Bar":"Show Add Task Bar"}
        </button>
       
    </div>
  )
}

export default Button