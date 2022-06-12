// B1: Include thư viện http
import express from "express";
import mongoose from "mongoose";
import homeRouter from "./routers/home";
import productRouter from "./routers/product"
import newRouter from "./routers/new"
import categoryRouter from "./routers/category";
import cors from 'cors'
import authRouter from "./routers/auth";
import bookRouter from "./routers/book";
const app = express();


app.use(express.json());
app.use(cors());
//Routing
app.use(homeRouter);
app.use('/api',productRouter);
app.use('/api',categoryRouter);
app.use('/api',bookRouter)
app.use(authRouter)
app.use(newRouter)
// Connect Database
mongoose.connect('mongodb://127.0.0.1:27017/we16307');

// Connect
const port = 8000;
app.listen(port, () => {
    console.log(`Server is runing on ${port}` )
})