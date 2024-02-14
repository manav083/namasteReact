import React from "react"

class UserClass extends React.Component {
    // extends React.Component which tells React that this class
    // is a class based component.
    // React.Component is a class given by React

    // In class based component to receive props we need to create a
    // constructor and receive with a keyword called super()

    constructor(props) {
        super(props);


        this.state = {
            count: 0,
        }
    }

    // go to questions

    // render method returns some piece of jsx 
    render() {
        return (
            <div className='user-card'>
                <h1>Count: {this.state.count}</h1>
                {/* never update state variables directly like
                this.state.count = this.state.count + 1
                */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <h2>Name: {this.props.name}</h2>
                <h2>Location: {this.props.location}</h2>
                <h2>Contact: @manavjain083</h2>
            </div>
        )
    }
}

export default UserClass;