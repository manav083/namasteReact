import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();


    const data = useContext(UserContext);
    // if no dependency array - useEffect will be called at every render
    // if empty dependency array - [] - useEffect will be called at initial render only(only once)
    // if not empty dependency array - [dependency] - useEffect will be called whenever dependency gets updated

    // no dependency array
    // useEffect(() =>{
    //     console.log("useEffect called");
    // });

    // empty dependency array
    // useEffect(() =>{
    //     console.log("useEffect called");
    // }, []);

    // dependency is btnName
    // useEffect(() =>{
    //     console.log("useEffect called");
    // }, [btnName]);
    return (
        <div className="flex justify-between">
            <div className="w-[7rem]">
                <img src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li style={{display: "flex"}}>Online Status: <div style={{width: 30, height: 30, borderRadius: "50%", backgroundColor: onlineStatus ? "lightgreen" : "red"}}></div></li>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <Link to="/grocery"><li>Grocery</li></Link>
                    <li>Cart</li>
                    <button className="login"
                        onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}
                    >
                        {btnName}
                    </button>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;