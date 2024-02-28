import React from 'react'
import User from './User'
import UserClass from './UserClass';


class About extends React.Component {

  constructor(props) {
    super(props);
    // console.log("constructor parent called");
  }

  componentDidMount() {
    // console.log("mount parent")
  }
  render() {
    // console.log("render parent");

    return (
      <div>
        <h1>About Class</h1>
        <h1>This is namaste react component</h1>

        <User name="Manav (function)" location="Delhi" />


        {/* <UserClass name="Manav (class)" location="Delhi" /> */}
        {/* <UserClass name="Aksahy Saini" location="Dehradun" /> */}
      </div>
    )
  }

}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h1>This is namaste react component</h1>

//       {/* <User name="Manav (function)" location="Delhi" /> */}


//       <UserClass name="Manav (class)" location="Delhi" />
//     </div>
//   )
// }

export default About