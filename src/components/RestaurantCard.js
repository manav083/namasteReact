import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    // console.log(props);
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    // console.log(cuisines.toString().length);
    const { deliveryTime } = resData?.info?.sla
    return (
        <div className="res-card" style={{ background: "lightgray" }}>
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.toString().length < 30 ? cuisines.toString() : cuisines.toString().slice(0,30) + "..."}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} MINS</h4>
        </div>
    )
}


export default RestaurantCard