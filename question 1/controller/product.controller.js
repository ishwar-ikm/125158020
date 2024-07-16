import { getAuthToken } from "../util/getAuthToken.js";

export const getProducts = async (req, res) => {
  try {
    const { company, category } = req.params;
    const { top, minPrice, maxPrice } = req.query;

    const { access_token } = await getAuthToken();

    const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
