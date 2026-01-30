import React, { useState } from 'react'

function App() {
const [color,setcolor]=useState("white")
  return (
    <div>
      <h1>color-picker</h1>
      <button onClick={()=>setcolor("RED")}>RED</button>
      <button onClick={()=>setcolor("GREEN")}>GREEN</button>
      <button onClick={()=>setcolor("BLUE")}>BLUE</button>
      <div className='bgchange' style={{backgroundColor:color}}></div>
      
    </div>
  )
}

export default App
