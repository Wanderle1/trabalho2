import express from 'express'
import connectDB from './config/db.js'
import expeditionRouter from './routes/expeditionRoutes.js'
import explorerRouter from './routes/explorerRoutes.js'
import speciesRouter from './routes/speciesRoutes.js'

connectDB()
const app = express()
app.use(express.json())

app.use('/expedition', expeditionRouter)
app.use('/explorer', explorerRouter)
app.use('/species', speciesRouter)


app.listen(3000, () => console.log('http://localhost:3000'))