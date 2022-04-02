import express from "express"
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignIn } from "../middlewares/checkAuth";
const productRouter = express.Router();


productRouter.get('/products',listProduct)
productRouter.get('/products/:id',listProductDetail)
productRouter.post('/products/:UserId',requiredSignIn,isAuth,isAdmin, createProduct)
// productRouter.post('/products', createProduct)
productRouter.delete('/products/:id',deleteProduct)
productRouter.put('/products/:id', updateProduct)

productRouter.param("UserId",userById)
export default productRouter;