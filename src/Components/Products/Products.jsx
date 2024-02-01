import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 overflow-hidden shadow-lg transition-transform transform ">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!isLoading ? (
          <>
            {products?.length ? (
              <>
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-4 hover:scale-105"
                  >
                    <div>
                      <img
                        src={
                          product?.show?.image?.medium ??
                          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                        }
                        alt={product.name}
                        className="  w-full h-60 mb-4 hover:scale-105"
                      />

                      <p className="text-gray-600 mt-10">
                        <span> Movie Name: </span>
                        {product?.show?.name}
                      </p>
                      <p className="text-gray-600 mb-10">
                        <span> Genres: </span>
                        {product?.show?.genres}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-blue-500 text-white px-4 py-2  rounded-lg">
                        <Link to={`/products/${product?.show?.id}`}>
                          Get Ticket
                        </Link>
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-9">
                        <Link to={`/product/${product?.show?.id}`}>
                          See Details
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              "No Product Found"
            )}
          </>
        ) : (
          "Loading"
        )}
      </div>
    </div>
  );
}

export default Products;
