import { useState } from "react";
import "./counter.css"
export const Counter = () => {
  const [counter, setCounter] = useState(1);

  const clickFun = (value) => {
    // console.log(counter);
    if(value === 2){
      setCounter(counter*2);
    }
 else{

   setCounter(counter + value);
 }
 
  };

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <p className={counter % 2 === 0 ? "red" : "green"}>Connter : {counter % 2 === 0 ? "Even" : "Odd"}</p>
      <button onClick={() => clickFun(1)} className="btn">Add</button>
      <button onClick={() => clickFun(-1)} className="btn">Dec</button>
      <button onClick={() => clickFun(2)} className="btn">Double</button>
    </div>
  );
};
