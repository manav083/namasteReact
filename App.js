import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    // console.log(props);
    const {resName, cuisine, rating, time} = props;
    return(
        <div className="res-card" style={{background: "lightgray"}}>
            <img className= "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi" alt="" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} starts</h4>
            <h4>{time} MINS</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="restaurant-container">
                <RestaurantCard resName="Meghna Foods" cuisine="Asian, Indian" rating="4.4" time="38" />
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" rating="3.8" time="30" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);