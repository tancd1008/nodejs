import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    }
},{timestamps:true})
export default mongoose.model('Category',categorySchema)