import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <div className="font-bold text-lg">
                <div>Cart</div>
                <div className="w-6/12 m-auto">
                    <button className="p-2 m-2 bg-[red] rounded-md cursor-pointer text-white" onClick={handleClearCart}>Clear Cart</button>
                    {cartItems.length === 0 && (
                        <h1>Your Cart is empty. Please Add more items in the cart</h1>
                    )}
                    <ItemList items={cartItems} /></div>
            </div>
        </div>
    )
}

export default Cart 