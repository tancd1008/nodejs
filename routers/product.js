import express from "express";

const router = express.Router();
const products = [
    {id: 1, name: "Product 1"},
    {id: 2, name: "Product 2"}
]
router.get("/products",(request,response)=>{
    response.json(products)
}),
router.get("/products/:id",(request,response)=>{
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
})
router.post("/products",(request,response)=>{
    products.push(request.body)
    response.json(products);
})
router.delete("/products/:id",(request,response)=>{
    const product = products.filter(item => item.id !== +request.params.id)
    response.json(product)
})
router.put("/products/:id",(request,response)=>{
    const product = products.map(item => item.id === +request.params.id ? request.body : item)
    response.json(product)
})

export default router;