import User from "../models/user";

export const signup = async (request,response) => {
    const {email,name,password} = request.body
    try {
        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser){
            return response.status(400).json({
                message:"User da ton tai"
            })
        }
        const user = await User({email,name,password}).save()
        response.json({
            user:{
                _id:user.id,
                email:user.email,
                name:user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const signin = async (request,response) => {
    const {email,password} = request.body
    const user = await User.findOne({email}).exec()
    if(!user){
        return response.status(400).json({
            message:"Tai khoan hoac mk sai"
        })
    }
    if(!user.authenticate(password)){
        return response.status(400).json({
            message:"Tai khoan hoac mk sai"
        })
    }
    response.json({
        user:{
            _id:user.id,
            email:user.email,
            name:user.name
        }
    })
    
}