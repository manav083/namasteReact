import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    // useEffect(() => {
    //     setResInfo(useRestaurantMenu(resId));
    // }, [])
    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    let filteredCards = cards.filter((card) => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(filteredCards)

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl m-4">{name}</h1>
            <p className="font-bold text-lg">{cuisines.toString()} - {costForTwoMessage}</p>
            {filteredCards.length > 0 && filteredCards.map((card, index) => {
                return <ItemCategory key={index} card={card.card.card} showItems={index === showIndex && true} setShowIndex={() => setShowIndex(index)}/>
            })}
        </div>
    )
}

export default ResturantMenu;