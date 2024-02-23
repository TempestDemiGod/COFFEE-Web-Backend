import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        min: 2,
        max: 12,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favorite: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductCoffe",
        },
    ],
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductCoffe",
        },
    ],
    avatar: {
        public_id: String,
        secure_url: String
    }
},{
    timestamps: true
})


export default mongoose.model('usercoffe', userSchema)