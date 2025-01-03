import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import { FaFacebook, FaArrowLeft } from "react-icons/fa";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Link to="/products" className="top-0 flex items-center">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2">
          <FaArrowLeft />
          Go Back
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-300 ease-in-out mt-5">
        {/* Left column - Image */}
        <div className="flex justify-center items-center transform transition-transform duration-300 hover:scale-105">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right column - Product Information */}
        <div className="flex flex-col space-y-4 transform transition-all duration-700 translate-x-[100%] animate-slideInFromRight">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600">{product.longDescription}</p>
          <p className="text-2xl font-semibold text-green-500">
            ${product.price}
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit flex items-center gap-2">
            <FaFacebook className="text-xl" />
            Order on Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
