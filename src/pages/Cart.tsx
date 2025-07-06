import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import CartProduct from "../components/cartProduct"

const Cart = () => {
  const cartItems = useSelector((state:RootState) => state.cart);

  if(cartItems.length===0){
    return <div>
      No Item added to cart
    </div>
  }
  return (
    <div>
      <CartProduct />
    </div>
  )
}

export default Cart