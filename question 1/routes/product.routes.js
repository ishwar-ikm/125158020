import express from "express"
import { getProducts } from "../controller/product.controller.js";

const router = express.Router();

router.get("/companies/:company/categories/:category/products", getProducts)

export default router;