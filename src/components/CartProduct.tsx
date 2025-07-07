import { useDispatch } from "react-redux";
import { DeleteIcon } from "../icons/DeleteIcon";
import type { CartItem } from "../redux/Slices/cartSlice";
import { removeItem } from "../redux/Slices/cartSlice";

const CartProduct = ({
  id,
  title,
  image,
  description,
  price,
}: CartItem) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-10 bg-white lg:px-20 md:px-10 px-4 py-8 overflow-hidden">
      {/* Left: Product Image */}
      <img
        className="h-44 w-full sm:w-56 sm:h-56 object-contain transition-transform duration-300 hover:scale-105 rounded-lg"
        src={image}
        alt="product_image"
      />

      {/* Right: Product Details */}
      <div className="text-gray-700 w-full px-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 leading-relaxed sm:text-justify">
          {description.substring(0, 120)}
          <span className="text-gray-400">...</span>
        </p>

        {/* Price + Delete */}
        <div className="flex justify-between items-center pt-8 sm:pt-16 flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
          <p className="text-lg sm:text-xl font-bold text-green-600">
            ${price.toFixed(2)}
          </p>

          <button
            onClick={() => dispatch(removeItem(id))}
            className="text-red-500 hover:text-red-700 transition cursor-pointer lg:pr-10 md:pr-0 pr-12"
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
