import express from "express"
import { route } from "express/lib/application";
import { createProduct, deleteProduct, editProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
const productRouter = express.Router();


productRouter.get('/products',listProduct)
productRouter.get('/products/:id',listProductDetail)
productRouter.post('/products', createProduct)
productRouter.delete('/products/:id',deleteProduct)
// router.put('/products/:id',updateProduct)
productRouter.put('/products/:id', editProduct)

export default productRouter;