import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 6000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
 origin:function(origin, callback){
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
      process.env.VERCEL_URL ? `http://${process.env.VERCEL_URL}` : null,
    ].filter(Boolean)

    if(
      !origin ||
      origin.startsWith("http://localhost:") ||
      allowedOrigins.includes(origin)
    ){
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
 },
 credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




app.listen(port,()=>{
    console.log("Hello From Server")
    console.log(port)
    connectDb()
})


