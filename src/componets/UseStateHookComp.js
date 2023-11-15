import React, { useState } from "react";

const UseStateHookComp = () => {
  const [count, setCount] = useState(0);
  const [myname,setMyName] = useState("Panchashil");
  const [fruits,setFruits] = useState(["Apple","Orange","banana","Mango","Graps"]);
  const counterInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>This is UseState Hook Component</h2>
      <p>
        Counter is :<strong>{count}</strong>
      </p>
      <p>My Name is :<strong>{myname}</strong></p>
      {/* <button type='button' onClick={()=>setCount(count+1)}>count ++</button> */}
      <button type="button" onClick={counterInc}>count ++</button>
      <hr/>
     <ul>
        {
            fruits.map((val,index)=>{
                return <li>{val}</li>
            })
        }
     </ul>


    </div>
  );
};

export default UseStateHookComp;
