import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>This is namaste react component</h1>

      {/* <User name="Manav (function)" location="Delhi" /> */}


      <UserClass name="Manav (class)" location="Delhi" />
    </div>
  )
}

export default About