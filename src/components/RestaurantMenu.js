import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";

const ResturantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     setResInfo(useRestaurantMenu(resId));
    // }, [])
    if (resInfo === null) return <Shimmer />

    // console.log(resInfo);
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards ? resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card : resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.toString()} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((menu) => {
                    return (
                        <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - Rs. {menu?.card?.info?.price ? menu?.card?.info?.price / 100 : menu?.card?.info?.defaultPrice / 100}</li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ResturantMenu;