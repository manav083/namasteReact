import React, { useState } from 'react'
import ItemList from './ItemList'

const ItemCategory = ({ card, setShowIndex, showItems }) => {
    // console.log(card)

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div className='w-1/2 mx-auto my-4 p-4 bg-gray-50 shadow-lg'>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>{card.title}</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={card.itemCards} />}
        </div>
    )
}

export default ItemCategory