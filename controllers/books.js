import Book from "../models/books"

export const listBook = async (request,response)=>{
    try{
        const book = await Book.find().exec()
        response.json(book)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const listBookDetail = async (request,response)=>{
    try{
        const book = await Book.findOne({_id:request.params.id}).exec()
        response.json(book)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
   
}
export const createBook = async (request,response)=>{
    try{
        const book = await Book(request.body).save()
        response.json(book)
        // response.json(books)
    }catch(error){
        response.status(400).json({message:"Khong the tao moi"})
    }
   
}
export const deleteBook = async (request,response)=>{
    try {
        const book = await Book.findOneAndDelete({_id:request.params.id}).exec()
        response.json(book);
    } catch (error) {
        response.status(400).json({message:"Khong xoa duoc"})
    }
    
}
export const updateBook = async (request,response)=>{
    try {
        const book = await Book.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(book)
    } catch (error) {
        response.status(400).json({message:"Loi khong update duoc"})
    }
    
}