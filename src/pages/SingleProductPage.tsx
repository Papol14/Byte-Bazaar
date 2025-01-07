import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import { FaFacebook, FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      handleNextImage();
    }, 8000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Add empty dependency array to run once on mount

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 h-screen">
      <Link to="/products" className="top-0 flex items-center">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2">
          <FaArrowLeft />
          Go Back
        </button>
      </Link>
      <motion.div
        className="flex flex-col md:flex-row gap-4 transition-all duration-300 ease-in-out mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left column - Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img
            src={currentImageIndex === 0 ? product.image : product.secondImage}
            alt={product.title}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow"
          >
            Next
          </button>
        </div>

        {/* Right column - Product Information */}
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 text-sm md:text-base">
            {product.longDescription}
          </p>
          <p className="text-xl md:text-2xl font-semibold text-green-500">
            ${product.price}
          </p>
          <Link
            to={product.link}
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit flex items-center gap-2"
          >
            <FaFacebook className="text-lg md:text-xl" />
            Order on Facebook
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleProductPage;
