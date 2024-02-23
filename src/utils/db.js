import mongoose from "mongoose";
import { URI_DB } from "./config.js";

export async function connectDb(){
    try {
        await mongoose.connect(URI_DB)
        console.log('Connect DB Successfully')
    } catch (error) {
        console.log({error: error.message})
    }
}