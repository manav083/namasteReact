import React, { useState, useEffect } from 'react'

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
      let interval = setInterval(() => {
        console.log("namaste op")
      }, 1000)
      console.log("mount"); // called second

      return () => {
        console.log("unmount") // called third
        clearInterval(interval)
      }  
      // this function will be called when component will unmount
      // works similar to componentWillUnmount

    }, [])

    console.log("render");  // called first
  return (
    <div className='user-card'>
        <h1>Count= {count}</h1>
        <h1>Count2= {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h2>Location: {props.location}</h2>
        <h2>Contact: @manavjain083</h2>
    </div>
  )
}

export default User