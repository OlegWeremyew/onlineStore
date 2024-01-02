const {Device, Brand} = require("../models/models");
const uuid = require('uuid')
const path = require('node:path')
const ApiError = require('../error/ApiError')

class deviceController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, info} = await req.body
      const {img} = req.files
      const fileName = uuid.v4() + '.jpg'
      //помещение картинки
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const device = await Device.create({name, price, brandId, typeId, img: fileName})

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll(req, res) {
    const {brandId, typeId} = req.query
    let devices = await Device.findAll()

    if (!brandId && !typeId) {
      devices = await Device.findAll()
    }
    if (brandId && !typeId) {
      devices = await Device.findAll({where: {brandId}})
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({where: {typeId}})
    }

    return res.json(devices)
  }

  async getOne(req, res) {

  }
}

module.exports = new deviceController()
