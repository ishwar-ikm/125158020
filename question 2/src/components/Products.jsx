import React, { useEffect, useState } from 'react';
import Product from './Product'; // Assuming Product component is for rendering individual product details
import { useParams } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { company, category } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`/api/test/companies/${company}/categories/${category}/products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [company, category]);

  return (
    <div className='flex flex-col gap-8 max-w-5xl mx-auto'>
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
