import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <Link to={`/product/${product._id}`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200">
      <div className='flex justify-between'>
      <h1 className="text-xl text-customText font-bold">{product.productName}</h1>
      <p>{product.availability === "out-of-stock" ? "Unavailable" : "Available"}</p>
      </div>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="text-gray-600">Discount: ${product.discount}</p>
      <p className="text-gray-600">Rating: {product.rating}</p>
    </Link>
  );Link
};

export default Product;
