import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(() => {
        // Retrieve the count from localStorage or default to 0
        const savedCount = localStorage.getItem("counter");
        return savedCount !== null ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        // Save the count to localStorage whenever it changes
        localStorage.setItem("counter", count);
    }, [count]);

    
  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);

  //useEffect(() => {
 //document.style.color = "red";
    
  //}, []); 

    function Decrease(){
        setCount(c => c - 1);
    }
    function Reset(){
        setCount(0);
    }
    function Increase(){
        setCount(c => c + 1);
    }

    return (
        <div className="card">
            <button className="btn" onClick={() => setCount(count + 1)}>
                count is {count}
            </button> 
            <div className="d-r-i">
                <button className="decrease" onClick={Decrease}>Decrease</button>
                <button className="reset" onClick={Reset}>Reset</button>
                <button className="increase" onClick={Increase}>Increase</button>
            </div>
        </div>
    );
}

export default Counter;
