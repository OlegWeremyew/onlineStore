const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const models = require('./models/models')
const app = express()
//для работы с корс
app.use(cors())
//чтобы мы могли парсить json формат
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'WORK'})
})

const start = async () => {
  try {
    await sequelize.authenticate() // подключение к базе данных
    await sequelize.sync() // сверка базы данных со схемой данных
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()