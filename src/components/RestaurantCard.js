import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
    // console.log(props);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    // console.log(cuisines.toString().length);
    const { deliveryTime } = resData?.info?.sla

    // console.log(resData?.info);
    return (
        <Link to= {"/restaurants/" + resData?.info.id}>
            <div className="bg-[lightgray] p-[10px] m-[10px]">
                <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
                <h3>{name}</h3>
                <h4>{cuisines.toString().length < 30 ? cuisines.toString() : cuisines.toString().slice(0, 30) + "..."}</h4>
                <h4>{avgRating} starts</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} MINS</h4>
            </div></Link>
    )
}


// Higher Order Component

// It takes input - Restaurant Card
// Output - Restaurant Card with Promoted tag

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white p-2 rounded">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard