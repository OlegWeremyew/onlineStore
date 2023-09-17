const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')

const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMidleware')

const PORT = process.env.PORT || 5000
const models = require('./models/models')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

//errors handler
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate() //bd connecting
    await sequelize.sync() // bd check data
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()
