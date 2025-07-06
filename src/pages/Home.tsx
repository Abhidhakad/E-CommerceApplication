import { useEffect, useState,useMemo } from "react";
import Product from "../components/Product";
import { useSelector} from "react-redux";
import type { RootState } from "../redux/store";
import ProductShimer from "../components/ProductShimer";

const API_URL = import.meta.env.VITE_API_URL;

interface Rating {
  rate: number;
}

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

const Home = () => {
  const [productData, setProductData] = useState<Products[]>([]);
  const [loading,setLoading] = useState<boolean>(false)
  const selectedCategory = useSelector((state:RootState) => state.category.selectedCategory)

  async function fetchProductsData(): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setProductData([]);
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All Categories") return productData;
    return productData.filter(
      (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [productData, selectedCategory]);

  useEffect(() => {
    fetchProductsData();
  }, []);

 if (loading || filteredProducts.length===0) {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-10 bg-gray-100">
      <div className="flex flex-wrap -mx-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductShimer key={i} />
        ))}
      </div>
    </div>
  );
}

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-10 bg-gray-100">
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
