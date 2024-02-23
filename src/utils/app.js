import express from "express";
import cors from 'cors'
import morgan from "morgan";
import productRoutes from '../routes/product.route.js'
import userRoutes from '../routes/user.route.js'
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
app.use(morgan('dev'))

app.use('/api/v1', productRoutes)
app.use('/api/v1', userRoutes)


export default app