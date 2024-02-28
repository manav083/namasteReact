import React from "react"

class UserClass extends React.Component {
    // extends React.Component which tells React that this class
    // is a class based component.
    // React.Component is a class given by React

    // In class based component to receive props we need to create a
    // constructor and receive with a keyword called super()

    constructor(props) {
        super(props);

        // console.log("constructor child", props.name);

        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy",
                location: "location",
                avatar_url: "",
            }
        }
    }

    async componentDidMount() {
        // console.log("mount child", this.props.name)
        const data = await fetch("https://api.github.com/users/manav083");
        const json = await data.json();
        this.setState({ userInfo: json });
        this.timer = setInterval(() => {
            console.log("NAMASTE REACT OP");
        }, 1000)

        // by declaring timer using "this" keyword it will be shared all
        // over the class so we can easily unmount it in componentWillUnmount
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count !== prevState.count){

            console.log("update is called");
        }
        console.log("update is called");
    }

    componentWillUnmount(){
        console.log("unmount will happen");
        clearInterval(this.timer);
    }
    // go to questions

    // render method returns some piece of jsx 
    render() {
        // console.log("render child", this.props.name);
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className='user-card'>
                {/* <h1>Count: {this.state.count}</h1> */}
                {/* never update state variables directly like
                this.state.count = this.state.count + 1
                */}
                {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button> */}
                <img src={avatar_url} width={300} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @manavjain083</h2>
            </div>
        )
    }
}

export default UserClass;