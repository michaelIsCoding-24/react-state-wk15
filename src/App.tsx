import { useState } from "react";
import InputBar from "./InputBar";
import List from "./List";

// test data
const TEST_DATA = [
  {
    id: 1,
    text: "Wash dishes",
    tracked: false
  },
  {
    id: 2,
    text: "Do laundry",
    tracked: false
  },
  {
    id: 3,
    text: "Do a reaaaally cool backflip",
    tracked: false
  },
  {
    id: 4,
    text: "Feed the Chickens",
    tracked: false
  } 
];

function App() {
  //test data in state
  const [data, setData] = useState(TEST_DATA)

  // adds the task given below
  const addTask = () => {
    const newTask = {
      id: 5,
      text: "Practice using Props in TSX",
      tracked: false
    }

    setData([ ...data, newTask])
  }

  //deletes the selected task
  const deleteTask = (idToDelete: number) => {
    setData(data.filter(d => d.id !== idToDelete))
  }

  // when clicked, updates a task's "tracked" status using a boolean
  const updateTrackStatus = (idToUpdate: number) => {
    setData(data.map(data => (
      data.id !== idToUpdate ? data : {
        ...data,
        tracked: !data.tracked
      }
    )))
  }
  //the main return code that displays the app
  return (
    <div className="container">
      <div className="row justify-content-center">
        <List data={data} deleteTask={deleteTask} updateTrackStatus={updateTrackStatus}/>
      </div>
      <div className="row justify-content-center">
        <InputBar addTask={addTask}/>
      </div>
    </div>

  )
}
export default App
