import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
const models = require('./models/models')
const sequelize = require('./db')

const router = require('./routes/index.ts')
const errorHandler = require('./middleware/ErrorHandlingMidleware')

const PORT = process.env.PORT || 5000
const app: Express = express()

app.use(cors())
app.use(express.json())
//@ts-ignore
app.use('/api', router)
app.get('/', (req, res) => {
  res.send('test1')
})

//errors handler
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate() //bd connecting
    await sequelize.sync() // bd check data
    app.listen(PORT, () => console.log(`server started on  http://localhost:${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()
