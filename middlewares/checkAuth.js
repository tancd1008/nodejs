import expressJWT from 'express-jwt'

export const requiredSignIn = expressJWT({
    secret: '123456',
    algorithms:["HS256"],
    requestProperty: "auth"
})
export const isAuth = (request,response,next) => {
    console.log(request.auth);
    console.log(request.profile);
    if(!(request.profile._id == request.auth._id)){
        return response.status(400).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();
}
export const isAdmin = (request,response,next) => {
    if(request.profile.role == 0){
        response.status(400).json({
            message: "Ban khong phai admin"
        })
    }
    next();
}