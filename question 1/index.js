import express, { json, urlencoded } from "express";
import dotenv from "dotenv"

import productsRoute from "./routes/product.routes.js"

dotenv.config();

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});