const ProductShimer = () => {
  return (
    <div className="md:w-1/4 sm:w-1/2 w-full p-4 animate-pulse">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-4">
          <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
          <div className="h-48 bg-gray-200 rounded w-full mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
        <div className="px-4 pb-4 mt-2 flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-3 w-10 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 w-24 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductShimer;
