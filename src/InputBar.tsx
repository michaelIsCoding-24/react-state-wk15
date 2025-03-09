import Button from "./Button"

type BarProps = {
    addTask: () => void
}


function InputBar({addTask}: BarProps){
    return (
        <div className="col-auto"> 
            <input id="task-input" type="text" placeholder="Enter Task..."></input>
            <Button style="btn btn-primary" onClick={addTask} text="Add Entry"/>
        </div>
    )
}

export default InputBar