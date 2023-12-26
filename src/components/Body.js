import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";


const Body = () => {

  // State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  // Normal JS variable
  // let listOfRestaurants = [
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


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
          onClick={() => {
            setListOfRestaurants(listOfRestaurants.filter((r) => r.info.avgRating >= 4.0));
          }}>
          Top Rated Restauants
        </button>
        {/* Filter restaurants whose rating is greater than 4.0 */}
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((r) => <RestaurantCard key={r.info.id} resData={r} />)}
      </div>
    </div>
  )
}

// default export 
export default Body;