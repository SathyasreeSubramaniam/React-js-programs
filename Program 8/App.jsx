import React, { useState } from 'react'

function App() {
  const [activetab,setactivetab]=useState("Home")
  return (
    <div style={Styles.container}>
    <h2>Tab Components</h2>
    <div style={Styles.tabcontainer}>
       <button onClick={()=>setactivetab("Home")}>Home</button> 
      <button onClick={()=> setactivetab("About")}>About</button>
      <button onClick={()=>setactivetab("Contact")}>Contact</button>

    
    </div>
    <div style={Styles.contentBox}>
      {activetab === "Home" && (
        <p>Welcome to Home page!! </p>
      )} 
      {activetab === "About" && (
        <p>Hai About page i'm reactjs</p>
      )}
      {activetab === "Contact" && (
        <p>Contact us</p>
      )}
      
    </div>
      
    </div>
  )
}
const Styles={
  container:{
    minHeight:"500vh",
    background:"lightgrey",
    textAlign:"center",
  },
  tabcontainer:{
    padding:"10px"
    

  },
  contentBox:{
    height:"100px",
    width:"200px",
    border:"2px solid",
    borderRadius:"10px",
    marginLeft:"600px",
  }
}
export default App


