import type { Products } from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/Slices/cartSlice";
import type { RootState } from "../redux/store";
import { toast } from "react-toastify";

const Product = ({
    id,
    title,
    category,
    description,
    image,
    price,
    rating,
}: Products) => {
    const dispatch = useDispatch();

    const isInCart = useSelector((state: RootState) => state.cart.some((item) => item.id === id));

    const handleClick = () => {
        if (isInCart) {
            dispatch(removeItem(id));
            toast.error("Item removed from cart!",{position:"top-center"});
        } else {
            const product = { id, title, description, image, price, quantity: 1 };
            dispatch(addItem(product));
            toast.success("Item added to cart!",{position:"top-center"});
        }
    }
    return (
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-4">
            <div className="group bg-white shadow-2xl rounded-2xl overflow-hidden transition-transform transform hover:scale-110 duration-500 hover:shadow-2xl">
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {title}
                    </h2>
                    <img
                        src={image}
                        alt={title}
                        className="h-48 w-full object-contain transition-all duration-300 hover:scale-105"
                        loading="lazy"
                    />
                    <div className="mt-4">
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {description}
                        </p>
                        <p className="text-sm text-blue-600 mt-1 capitalize">{category}</p>
                    </div>
                </div>

                <div className="px-4 pb-4 flex items-center justify-between">
                    <div>
                        <p className="text-xl font-bold text-green-600">${price.toFixed(2)}</p>
                        <p className="text-sm text-yellow-500">⭐ {rating.rate} / 5</p>
                    </div>
                    <button onClick={handleClick} className="border-2 border-gray-600 cursor-pointer text-black text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-gray-600 group-hover:text-white transition duration-300">
                        {isInCart ? "REMOVE ITEM" : "ADD TO CART"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
