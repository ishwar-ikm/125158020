import express from "express"
import { getOneProduct, getProducts } from "../controller/product.controller.js";

const router = express.Router();

router.get("/companies/:company/categories/:category/products", getProducts)
router.get("/product/:id", getOneProduct)

export default router;