const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class typeController {
  async create(req, res) {
    const {name} = req.body
    const type = await Type.create({name})
    return res.json()
  }

  async getAll(req, res) {

  }
}

module.exports = new typeController()
