import React, { useEffect, useState } from 'react'

function UserDetails() {
    const[user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])
  return (
    <div>
    <h3>USER DETAILS</h3>
    <div>
        {user.map((details)=>(
            <div key={user.id}>
                Username: <p>{details.name}</p>
                Email: <p>{details.email}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default UserDetails
