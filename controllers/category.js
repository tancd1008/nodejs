import Category from "../models/category";
import Book from "../models/books";

export const createCategory = async (request,response) => {
    try{
        const category = await Category(request.body).save()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
}
export const listCategory = async (request,response) => {
    try{
        const category = await Category.find().exec()
        response.json(category)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listCategoryDetail = async (request,response) => {
    try{
        const category = await Category.findOne({_id:request.params.id}).exec()
        const book = await Book.find({category_id:request.params.id}).populate("category_id").exec()
        response.json({category,book})
        // response.json(products)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const deleleCategory = async (request,response) => {
    try {
        const category = await Category.findOneAndDelete({_id:request.params.id}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}
export const updateCategory = async (request,response) => {
    try {
        const category = await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
    // try {
    //     const category = await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec();
    //     response.json(category);
    // } catch (error) {
    //     response.status(400).json({message:"Lỗi Không cập nhật được"})
    // }
}