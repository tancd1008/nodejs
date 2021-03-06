import mongoose, {ObjectId} from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    status: {
        type: Number,
        required:true
    }
    // price: {
    //     type: Number,
    //     required:true
    // },
    // img:{
    //     type: String,
    //     required: true
    // },
    // category:{
    //     type: ObjectId ,
    //     ref:'Category'
    // },
    // desc:{
    //     type: String,
    //     required: true
    // }
}) //timestamps cập nhật thời gian
export default mongoose.model('Product', productSchema);