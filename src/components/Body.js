import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
// import { resData } from "../utils/mockData";


const Body = () => {

    const [listofRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() => {
        // this callback function will be called after the component is rendered.
        // console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () =>  {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); // Not a good way or standard way

        // Always use Optional Chaining
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Not a good way or standard way
        // console.log(json);
    }

    // console.log("Body rendered"); // this will be called before useEffect

    return (
        <div className="body">
            <div className="Search">
                <button onClick={() => { setListOfRestaurant(listofRestaurant.filter((r) => r.info.avgRating >= 4)) }}>Top Rated Restaurant</button>
            </div>
            <div className="restaurant-container">
                {listofRestaurant.map((r) => <RestaurantCard key={r.info.id} resData={r} />)}
            </div>
        </div>
    )
}

// default export 
export default Body;