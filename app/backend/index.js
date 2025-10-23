import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import shopRouter from "./routes/shop.routes.js"
import itemRouter from "./routes/item.routes.js"
import orderRouter from "./routes/order.routes.js"
import http from "http"
import { Server } from "socket.io"
import { socketHandler } from "./utils/socket.js"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "https://bitebox-8gfl.onrender.com",
        credentials: true,
        methods: ['POST', 'GET']
    }
})

app.set("io", io)

const PORT = process.env.PORT || 5000

// middlewares
app.use(cors({
    origin: "https://bitebox-8gfl.onrender.com",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

// routes
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/shop", shopRouter)
app.use("/api/item", itemRouter)
app.use("/api/order", orderRouter)

socketHandler(io)

server.listen(PORT, () => {
    connectDb()
    console.log(`Server started at ${PORT}`)
})
