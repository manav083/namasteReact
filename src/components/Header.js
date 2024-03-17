import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    // Subscribing to the store using a Selector 

    const cartItems = useSelector((state) => state.cart.items);

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
        <div className="flex justify-between shadow-2xl">
            <div className="w-[7rem]">
                <img src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex p-4 m-4 gap-4 items-center font-bold cursor-pointer">
                    <li style={{ display: "flex" }}>Online Status: {onlineStatus ? "🚀" : "✅"}</li>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <Link to="/grocery"><li>Grocery</li></Link>
                    <Link to="/cart"><li className="font-bold">Cart - ({cartItems.length} items)</li></Link>
                    <button className="bg-[red] p-[10px_15px] rounded-md text-white"
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