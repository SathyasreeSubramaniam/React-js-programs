import React, { useState } from 'react'

function App() {
const [num1,setNum1]=useState("");
const [num2,setNum2]=useState("");
const a=Number(num1);
const b=Number(num2);
  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" placeholder='Enter the First value' onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" placeholder='Enter the Second value' onChange={(e)=>setNum2(e.target.value)}/>

    <div style={{height:"250px",
    width:"300px",
    border:"1px solid",
    marginLeft:"520px",
    marginTop:"20px",
    textAlign:"left"}}>

      <h4>Result's</h4>
    <p><strong>Addition :</strong>{a+b}</p>
    <p><strong>Subtraction :</strong>{a-b}</p>
    <p><strong>Multiplication :</strong>{a*b}</p>
    <p><strong>Division :</strong>{b==0 ? "can't divided by zero":a/b}</p>
    
    </div>
    </div>
  )
}

export default App
//index.css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

