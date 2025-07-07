import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import CartProduct from "../components/CartProduct"

const Cart = () => {
  const cartItems = useSelector((state:RootState) => state.cart);

  if(cartItems.length===0){
    return <div className="h-screen flex flex-col justify-center items-center bg-white text-black">
      <h2 className="text-2xl text-gray-700 font-bold">Your cart is empty!</h2>
      <button className="">SHOP NOW</button>
    </div>
  }
  return (
    <div>
      <CartProduct />
    </div>
  )
}

export default Cart