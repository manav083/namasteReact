import RestaurantCard from "./RestaurantCard"
import { resData } from "../utils/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                Search
            </div>
            <div className="restaurant-container">
                {resData.map((r) => <RestaurantCard key={r.info.id} resData={r} />)}
            </div>
        </div>
    )
}

// default export 
export default Body;