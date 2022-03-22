import express from "express";
import { createCategory, deleleCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";

const categoryRouter = express.Router();

categoryRouter.get('/category',listCategory)
categoryRouter.get('/category/:id',listCategoryDetail)
categoryRouter.post('/category',createCategory)
categoryRouter.delete('/category/:id', deleleCategory)
categoryRouter.put('/category/:id',updateCategory)
export default categoryRouter;