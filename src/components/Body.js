import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

  // State Variable - Super Powerful variable

  const [listofRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    // this callback function will be called after the component is rendered.
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); // Not a good way or standard way

    // Always use Optional Chaining
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Not a good way or standard way
    // console.log(json);
  }

  // It will get rendered until we get the data from the api

  // This is called as condition rendering
  // if (listofRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  // console.log("Body rendered"); // this will be called before useEffect

  // Normal JS variable
  // let listOfRestaurants = 
  // [
  //   {
  //     "info": {
  //       "id": "368133",
  //       "name": "White Hart Pizza",
  //       "cloudinaryImageId": "zxxuxplfux7eoxsv7ms2",
  //       "costForTwo": "₹280 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Italian",
  //         "Snacks"
  //       ],
  //       "avgRating": 3.8,
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "368134",
  //       "name": "Dominos",
  //       "cloudinaryImageId": "zxxuxplfux7eoxsv7ms2",
  //       "costForTwo": "₹280 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Italian",
  //         "Snacks"
  //       ],
  //       "avgRating": 4.4,
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "368135",
  //       "name": "Mc Donald's",
  //       "cloudinaryImageId": "zxxuxplfux7eoxsv7ms2",
  //       "costForTwo": "₹280 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Italian",
  //         "Snacks"
  //       ],
  //       "avgRating": 4.1,
  //       "sla": {
  //         "deliveryTime": 33,
  //       },
  //     }
  //   }
  // ];

  // this is also called as conditional rendering using ternary operator
  return listofRestaurant.length === 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter-btn">
        <button className="filter-btn"
          onClick={() => {
            setListOfRestaurant(listofRestaurant.filter((r) => r.info.avgRating >= 4))
          }}>
          Top Rated Restaurant
        </button>
        {/* Filter restaurants whose rating is greater than 4.0 */}
      </div>
      <div className="restaurant-container">
        {listofRestaurant.map((r) => <RestaurantCard key={r.info.id} resData={r} />)}
      </div>
    </div>

}

// default export 
export default Body;