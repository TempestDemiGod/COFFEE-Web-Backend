import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
    },
    desc: {
        type: Boolean,
        default: false
    },
    porcDesc: {
        type: Number
    },
    img: {
        public_id: String,
        secure_url: String
    }
},{
    timestamps: true
})


export default mongoose.model('mainProductCoffe', productSchema)