import Product from '../models/products'
const products = [
    {id: 1, name: "Product 1"},
    {id: 2, name: "Product 2"}
]
export const listProduct = (request,response) => {
    response.json(products)
}
export const detailProduct = (request,response) => {
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
}
export const createProduct = (request,response) => {
    products.push(request.body)
    response.json(products);
}
export const deleteProduct = (request,response) => {
    const product = products.filter(item => item.id !== +request.params.id)
    response.json(product)
}
export const updateProduct = (request,response) => {
    const product = products.map(item => item.id === +request.params.id ? request.body : item)
    response.json(product)
}
