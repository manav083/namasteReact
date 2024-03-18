import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import { resData } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

  // State Variable - Super Powerful variable

  const [listofRestaurant, setListOfRestaurant] = useState([]); // use to keep the initial data of the api intact
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // use to filter and render the restaurants
  const [searchText, setSearchText] = useState("")


  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    // this callback function will be called after the component is rendered.
    // console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); // Not a good way or standard way

    // console.log(json?.data?.cards)
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

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>Looks like you are offline. Please Check your internet connection.</h1>
  }
  return filteredRestaurant && filteredRestaurant.length === 0 ? <Shimmer /> :
    <div className="body">
      <div className="filter">
        <div className="search ml-[20px]">
          <input
            placeholder="search"
            type="text"
            className="border-[2px] p-[10px_15px]"
            value={searchText}
            // the value of input text binds to the value of state variable
            // if we do not update the state variable then the input text will not
            // going change and will stay the same as initial value i.e. "".
            // So, we need to change the state variable as soon as input text changes 
            // That's why we need to include onChange and update the state variable.
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-[orange] w-max p-[10px_15px] m-[20px] text-white shadow-xl"
            onClick={() => {
              // filter the restaurant cards and update the UI
              // using toLowerCase() to make the search case insensitive
              searchText != "" ?
                setFilteredRestaurant(listofRestaurant.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))) : fetchData()
            }}>Search</button>
          <button
            className="bg-[orange] w-max p-[10px_15px] m-[20px] text-white shadow-xl"
            onClick={() => {
              setFilteredRestaurant(listofRestaurant.filter((r) => r.info.avgRating >= 4))
            }}>
            Top Rated Restaurant
          </button>
          <label>UserName: </label>
          <input className="p-2 border-[2px]" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
          {/* Filter restaurants whose rating is greater than 4.0 */}
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-[10px] mt-[20px] p-[10px]">
        {filteredRestaurant.map((r) => <RestaurantCardPromoted key={r.info.id} resData={r} />)}
      </div>
    </div>

}

// default export 
export default Body;