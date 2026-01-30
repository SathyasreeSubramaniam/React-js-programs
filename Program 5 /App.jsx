import React, { useEffect, useState } from 'react'

function App() {
const [greetingmessage,setGreeting]=useState("");
useEffect(()=>{
  let hours=new Date().getHours().toString().padStart(2,"0")
  let minutes=new Date().getMinutes().toString().padStart(2,"0")
  let seconds=new Date().getSeconds().toString().padStart(2,"0")
  if(hours<12){
    setGreeting(`Good Morning ${hours}:${minutes}:${seconds}`)
  }
else if(hours>=12 && hours<=15){
  setGreeting(`Good Afternoon ${hours}:${minutes}:${seconds}`)
}
else if(hours>=17 && hours<=18){
  setGreeting(`Good Evening ${hours}:${minutes}:${seconds}`)
}
else{
  setGreeting(`Good Night`)
}

})
  return (
    <div>
     
      <div style={{
        height:"100px",
        width:"300px",
        backgroundColor:"lightpink",
        marginTop:"50px",
        marginLeft:"500px",
        borderTopLeftRadius:"20px",
        borderBottomRightRadius:"20px",
        textAlign:"center",
        paddingTop:"80"}}>{greetingmessage}</div>
      
    </div>
  )
}

export default App
