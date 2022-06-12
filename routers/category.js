import express from "express";
import { createCategory, deleleCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";

const categoryRouter = express.Router();

categoryRouter.get('/categories',listCategory)
categoryRouter.get('/categories/:id',listCategoryDetail)
categoryRouter.post('/categories',createCategory)
categoryRouter.delete('/categories/:id', deleleCategory)
categoryRouter.patch('/categories/:id',updateCategory)
export default categoryRouter;