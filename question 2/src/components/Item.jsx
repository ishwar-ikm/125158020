import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Item = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`/api/test/product/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [id]);

  if(!product){
    return <p>Loading...</p>
  }

  return (
    <div to={`/product/:id`} className="bg-customBg rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition duration-200">
      <div className='flex justify-between'>
      <h1 className="text-xl text-customText font-bold">{product.productName}</h1>
      <p>{product.availability === "out-of-stock" ? "Unavailable" : "Available"}</p>
      </div>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="text-gray-600">Discount: ${product.discount}</p>
      <p className="text-gray-600">Rating: {product.rating}</p>
    </div>
  )
}

export default Item
