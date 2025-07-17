import logoImg from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CartIcon } from "../icons/CartIcon";
import { HomeICon } from "../icons/HomeIcon";
import { useDispatch,useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/categorySlice";
import type { RootState } from "../redux/store";


const Navbar = () => {
  const dispatch = useDispatch()
   const selectedCategory = useSelector(
    (state: RootState) => state.category.selectedCategory
  );
  const cartItemLength = useSelector((state:RootState) => state.cart.length);
  return (
    <header className="w-full bg-sky-950 shadow-2xl px-4 sm:px-8 md:px-12 lg:px-20 py-4">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        
        <div className="flex items-center flex-wrap justify-between w-full">
          {/* Logo */}
          <Link to="/" className="transform scale-125">
            <img
              className="h-10 w-auto object-contain cursor-pointer"
              src={logoImg}
              alt="logo_image"
              loading="lazy"
            />
          </Link>

          <div className="w-full sm:p-0 p-4 sm:w-64 sm:order-2 order-3">
          <select
            id="options"
            name="options"
             value={selectedCategory}
             onChange={(e) => dispatch(setCategory(e.target.value))}
            className="block w-full rounded-md border border-gray-300 bg-gray-200 px-4 py-2 text-gray-900 shadow-sm focus:border-gray-800 focus:ring-stone-800 focus:outline-none"
          >
            <option>All Categories</option>
            <option>Men's Clothing</option>
            <option>Women's Clothing</option>
            <option>Electronics</option>
            <option>Jewelery</option>
          </select>
        </div>
        

          {/* Nav Links (Home + Cart) */}
          <div className="flex items-center gap-10 text-white sm:order-3 order-2">
            <Link to="/" className="text-md font-medium flex  items-center gap-1 text-xl hover:text-gray-300 transition">
              <HomeICon />
              Home
            </Link>
            <Link to="/cart" className="cursor-pointer hover:text-gray-300 transition relative">
              <CartIcon />
              {cartItemLength>0 && <span className="bg-green-500 py-0.5 px-1.5 rounded-full text-white text-xs absolute -top-3 left-3 animate-bounce">{cartItemLength}</span>}
            </Link>
          </div>
        </div>

        {/* Bottom Row (Dropdown) */}
        
      </nav>
    </header>
  );
};

export default Navbar;
