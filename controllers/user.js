import User from "../models/user";

export const userById = async (request,response,next,id) => {
    try {
        const user = await User.findById(id).exec()
        if(!user){
            return response.status(400).json({
                message: "User khong ton tai"
            })
        }
        request.profile = user;
        request.profile.password = undefined;
        next();
    } catch (error) {
        
    }
}
export const getUsers = async (request,response)=>{
    try{
        const user = await User.find().exec()
        response.json(user)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}
export const updateUser = async (request,response)=>{
    try {
        const user = await User.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(user)
    } catch (error) {
        response.status(400).json({message:"Loi khong update duoc"})
    }
    
}
export const delteUser = async (request,response) => {
    try {
        const user = await User.findOneAndDelete({_id:request.params.id}).exec();
        response.json(user);
    } catch (error) {
        response.status(400).json({message:"Lỗi Không cập nhật được"})
    }
}