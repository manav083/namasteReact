import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const ItemList = ({ items }) => {

    const dispatch = useDispatch();
    // console.log(items)

    const handleAddItem = (item) => {
        // dispatch an action

        dispatch(addItem(item));
    }
    return (
        <div className='transition duration-500'>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className='border-b-2 border-gray-200 text-left'>
                    <div className='mt-2'>
                        <span>{item?.card?.info?.name}</span>
                        <span>-₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                    </div>
                    <p className='mb-3 text-xs text-gray-500'>{item?.card?.info?.description}</p>
                    <div className='bg-black text-white p-[10px_15px] w-max m-[10px] rounded-md cursor-pointer' onClick={() => handleAddItem(item)}>Add To Cart</div>
                </div>
            ))}
        </div>
    )
}

export default ItemList