import React from "react";
import { products } from "../data/product";

const Featured = () => {
  // Get first 3 products for featured section
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-16 text-gray-700 bg-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Best Selling Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform opacity-0 animate-fadeIn ${
                index % 2 === 0 ? "translate-y-12" : "-translate-y-12"
              } ${
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-300"
                  : "delay-500"
              }`}
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ₱{product.price}
                  </span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
