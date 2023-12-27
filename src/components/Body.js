import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

  // State Variable - Super Powerful variable

  const [listofRestaurant, setListOfRestaurant] = useState([]); // use to keep the initial data of the api intact
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // use to filter and render the restaurants
  const [searchText, setSearchText] = useState("")

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
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // Not a good way or standard way
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
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

  // console.log(listofRestaurant);
  // this is also called as conditional rendering using ternary operator
  return filteredRestaurant && filteredRestaurant.length === 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            placeholder="search"
            type="text"
            className="search-box"
            value={searchText}
            // the value of input text binds to the value of state variable
            // if we do not update the state variable then the input text will not
            // going change and will stay the same as initial value i.e. "".
            // So, we need to change the state variable as soon as input text changes 
            // That's why we need to include onChange and update the state variable.
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => {
            // filter the restaurant cards and update the UI
            // using toLowerCase() to make the search case insensitive
            searchText != "" ?
            setFilteredRestaurant(listofRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))) : fetchData()
          }}>Search</button>
        </div>
        <div className="filter-btn">
          <button className="filter-btn"
            onClick={() => {
              setFilteredRestaurant(listofRestaurant.filter((r) => r.info.avgRating >= 4))
            }}>
            Top Rated Restaurant
          </button>
          {/* Filter restaurants whose rating is greater than 4.0 */}
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((r) => <RestaurantCard key={r.info.id} resData={r} />)}
      </div>
    </div>

}

// default export 
export default Body;