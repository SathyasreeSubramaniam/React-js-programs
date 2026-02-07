import React, { useState } from 'react'

function App() {
  const [theme, setTheme]=useState=("light");
  const Toggletheme =()=>{
    setTheme(theme === "light" ? "Dark" : "light")
  };
  const containerStyle={
      minHeight:"100vh",
      padding:"10px",
      backgroundColor:theme ==="light" ? "#222" : "#fff",
      color:theme === "Dark" ? "#030303" : "#ffff"
  }
  return (
    <div style={containerStyle}>
      <h1>Theme Toggle </h1>
      <p>Click the button to switch between Light and Dark Mode </p>
      <button onClick={Toggletheme}>
        Switch to {theme === "light" ? "light" : "Dark"}Mode
        </button>
        <div style={{marginTop: "20px"}}></div>
      <p>Text color also changes according to the Selected theme</p>
    </div>
  )
}

export default App;
