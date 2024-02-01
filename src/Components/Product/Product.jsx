import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  return (
    <div className="container mx-auto mt-10">
      <div className="  bg-white shadow-md rounded-lg p-4 flex">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={
              productDetails?.image?.medium ??
              "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            }
            alt={productDetails.name}
            className="w-60 h-auto  "
          />
        </div>
        <div className="flex flex-col justify-between ml-4 w-1/2">
          <div>
            <h2 className="text-xl font-bold mb-2">
              Movie Name:{" "}
              <span className="text-sm"> {productDetails?.name}</span>
            </h2>
            <p className="text-gray-600">
              Summary:{" "}
              <span className="text-sm">{productDetails?.summary}</span>
            </p>
            <button className="bg-blue-500 text-white px-4 py-2  rounded-lg mt-20">
              <Link to={`/products/${productDetails?.id}`}>Get Ticket</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
