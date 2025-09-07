import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import './SingleProductPage.css'; // Assuming you have a CSS file for styles

const SingleProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const handleRedirect = (platform: string, link: string) => {
    toast.success(`Redirecting you to ${platform}`);
    setTimeout(() => {
      window.open(link, '_self'); // opens in the same tab
    }, 1000);
  };  

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
    <div className="product-page">
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <Link to="/products" className="inline-block mb-6">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2">
            <FaArrowLeft />
            Go Back
          </button>
        </Link>
        <motion.div
          className="flex flex-col md:flex-row gap-8 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left column - Image */}
          <div className="relative flex justify-center items-center w-full md:w-1/2">
            <img
              src={currentImageIndex === 0 ? product.image : product.secondImage}
              alt={product.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white/90 p-3 rounded-full shadow-md hover:bg-white transition-colors"
            >
              Next
            </button>
          </div>

          {/* Right column - Product Information */}
          <div className="flex flex-col space-y-6 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {product.longDescription}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-green-600">
              ₱{product.price}
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleRedirect('Checkout', product.checkoutLink)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold w-fit"
              >
                Buy Product
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('09566505010');
                  toast.success('GCash number copied to clipboard!');
                }}
                className="bg-gray-200 text-gray-800 px-8 py-4 mt-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-semibold w-fit flex items-center gap-2"
              >
                <span className="text-xl"><img src="/gcash-logo.png" alt="" width={30} height={30} /></span>
                GCash
              </button>
              <h3>Gcash Name: John Paul E.</h3>
              <br />
                <a href="/faq" className="hover: underline"><h2>Dont know how to buy Products?</h2></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SingleProductPage;
