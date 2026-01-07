import React, { useState } from "react";

function App(){
  const [Name,setName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  const [submittedData,setSubmittedData]=useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData={Name,Email,Password}
    setSubmittedData(formData);
    setName("")
    setEmail("")
    setPassword("")
  }
  return (
    <>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>

  <label>Name</label>
  <input type="text"
    placeholder='Enter Your Name'
    value={Name}
    onChange={(e)=>setName(e.target.value)}
    /><br></br>

  <label>Email</label>
  <input type="text"
    placeholder='Enter Your Email id'
    value={Email}
    onChange={(e)=>setEmail(e.target.value)}
    /><br></br>

  <label>Password</label>
  <input type="password"
    placeholder='Enter Your Password'
    value={Password}
    onChange={(e)=>setPassword(e.target.value)}
    /><br></br>
    <button type="submit">Submit</button>

    
    
    
    </form>
    {submittedData &&(
      <div>
        <h2>submitted data's</h2>
        <p><strong>Name:</strong>{submittedData.Name}</p>
        <p><strong>Email:</strong>{submittedData.Email}</p>
        <p><strong>Password:</strong>{submittedData.Password}</p>
      </div>
    )
      

    }
    </>
  )
}

export default App