import React from 'react';
import { products } from "../data/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] animate-[dots_20s_linear_infinite]" />
      </div>

      <div className="container mx-auto p-6 relative">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-300 hover:border-blue-500"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-green-600 font-bold">₱{product.price}</p>
                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <FaShoppingCart className="inline mr-2" /> Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
