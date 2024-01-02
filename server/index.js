require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path')
const router = require('./routes/index')
const sequelize = require('./db')
const errorHandler = require('./middleware/ErrorHandingMiddleware')

const PORT = process.env.PORT || 7777;
const app = express()

app.use(cors());
app.use(express.json({}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//last middleware
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
