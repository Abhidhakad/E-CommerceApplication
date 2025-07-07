import React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { Link } from "react-router-dom"
import CartProduct from "../components/CartProduct"

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);

  if (cartItems.length === 0) {
    return <div className="h-screen flex flex-col gap-6 justify-center items-center bg-white text-black">
      <h2 className="text-2xl text-gray-700 font-bold transform -translate-y-4">Your cart is empty!</h2>
      <Link to="/" className="p-4">
        <button className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:border-green-500 hover:border-2 hover:text-green-600 hover:bg-white transition-all">SHOP NOW</button>
      </Link>
    </div>
  }
  return (
    <div className="w-full flex flex-wrap bg-white">
      <div className="md:w-[60%] sm:w-full flex flex-col">
        {
          cartItems.map((p,index) => (
            <React.Fragment key={p.id}>
              <CartProduct {...p} />
              {cartItems.length > 1  && index !== cartItems.length - 1 && <span className="w-[80%] ml-10 border sm:px-20 border-b-gray-600" ></span>}
            </React.Fragment>
          ))
        }

      </div>
      <div className="sm:w-[40%] w-full flex flex-col sm:items-start items-center flex-wrap pt-16 px-14">
        <h4 className="text-green-700 text-xl font-bold">YOUR CART</h4>
        <h2 className="text-4xl font-extrabold text-green-700 tracking-wide uppercase relative inline-block after:block after:h-1 after:w-16 after:bg-green-500 after:mt-2">
          Summary
        </h2>
        <p className="text-gray-600 text-xl font-bold pt-6">Total Items: <span className="text-black">{cartItems.length}</span></p>
        <p className="text-gray-600 text-xl font-bold pt-2">Total amounts: <span className="text-black">${cartItems.reduce((acc, curr) => acc + (curr.price*curr.quantity), 0)}</span></p>
        <button className="w-2/3 px-4 cursor-pointer shadow-2xl hover:scale-105 transition-all py-2 text-xl bg-green-700 rounded-2xl mt-4 text-white font-bold">
          ORDER NOW
        </button>
      </div>
    </div>
  )
}

export default Cart