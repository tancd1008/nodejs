import express from "express";
import { createProduct, deleteProduct, detailProduct,  listProduct, updateProduct } from "../controllers/products";

const router = express.Router();

router.get("/products",listProduct),
router.get("/products/:id",detailProduct)
router.post("/products",createProduct)
router.delete("/products/:id",deleteProduct)
router.put("/products/:id",updateProduct)

export default router;