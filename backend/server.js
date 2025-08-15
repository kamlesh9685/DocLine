import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import userRouter from './routes/userRoute.js'

// Create express app
const app = express()
const port = process.env.PORT || 4000

// For ES Module path handling
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Connect DB and Cloudinary
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())

app.use(cors({
  origin: ['https://docline-frontend.onrender.com', 'https://docline-admin.onrender.com'], // frontend URLs
  origin: ['https://docline-frontend.onrender.com', 'https://docline-admin.onrender.com'], // yaha frontend live URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}))
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)

// Serve frontend build folder
app.use(express.static(path.join(__dirname, 'frontend/build')))

// API test route
app.get('/', (req, res) => res.send('API WORKING done'))

// Fallback route for SPA (React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

// Start server
app.listen(port, () => console.log("Server Started", port))
