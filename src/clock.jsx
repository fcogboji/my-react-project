import { useState } from "react";

const Clock = () => { 
    // Define a functional component named Clock
    let time  = new Date().toLocaleTimeString() 
    // Initialize a variable 'time' with the current time as a string
  
    const [ctime, setTime] = useState(time) 
    // Create a state variable 'ctime' with 'time' as initial value and 'setTime' as its updater
    const UpdateTime = () => { 
        // Define a function named UpdateTime to update the time
      time = new Date().toLocaleTimeString() 
      // Update the 'time' variable with the current time as a string
      setTime(time) 
      // Update the state variable 'ctime' with the new time
    }
    setInterval(UpdateTime) 
    // Set an interval to call UpdateTime function continuously
    
    return <div>
              <h1 className="clock">{ctime}</h1> 
          </div> 

    // Return an h1 element displaying the current time from the state
  }
  
  export default Clock; 
  // Export the Clock component as the default export
  