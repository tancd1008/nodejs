import mongoose from "mongoose";
import { createHmac } from "crypto"
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
})
userSchema.methods = {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },
    encrytPassword(password){
        if(!password) return
        try {
            // sha256 thuật toán mã hóa pass(createHmac mã hóa)
            // hex thuật toán trả về pass(digest trả về)
            return createHmac("sha256","123456").update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }

    }
}
userSchema.pre("save", function(next) {
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        
    }
})
export default mongoose.model('User',userSchema)