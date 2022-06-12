import mongoose, {ObjectId} from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number
    },
    desc: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    category_id: {
        type: ObjectId,
        ref: 'Category'
    },
    status: {
        type: Number,
        default: 0
    }
},{timestamps: true})
export default mongoose.model('Book',bookSchema);