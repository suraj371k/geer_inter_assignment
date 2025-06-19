import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDb from './config/connectDb.js'
import productRoutes from './routes/product.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000

// Routes
app.use('/api/products', productRoutes)

// Connect to DB and start server
connectDb()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
