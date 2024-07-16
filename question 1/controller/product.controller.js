import { getAuthToken } from "../util/getAuthToken.js";
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const getProducts = async (req, res) => {
  try {
    const { company, category } = req.params;
    const { top = 15, minPrice = 0, maxPrice = 100000, rating } = req.query;

    const { access_token } = await getAuthToken();

    const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    });

    let data = await response.json();

    data = data.map(item => ({
      ...item,
      _id: uuidv4()
    }));

    if (rating) {
      data = data.filter(item => item.rating >= parseInt(rating));
    }

    const filePath = path.resolve('E:/ikm/Full Stack Projects/125158020/question 1/data', 'products.json');
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const {id} = req.params;

    const filePath = path.resolve('E:/ikm/Full Stack Projects/125158020/question 1/data', 'products.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    
    const product = data.find(item => item._id === id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
