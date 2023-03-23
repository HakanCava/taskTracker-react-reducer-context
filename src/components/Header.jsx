import Button from "./Button"


const Header = ({showbar,setShowbar}) => {
  
  return (
    <div>
        <h1 className="display-4">Task Tracker</h1>
        <Button showbar={showbar} setShowbar={setShowbar} />
    </div>
  )
}

export default Header