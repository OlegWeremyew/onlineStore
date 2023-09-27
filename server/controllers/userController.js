const ApiError = require('../error/ApiError')

class UserController {
  async check(req, res, next) {
    const {id} = req.query

    if (!id) {
      return next(ApiError.badRequest("ID is not define"))
    }

    res.json(id)
  }

  async registration(req, res) {}

  async login(req, res) {}

}

module.exports = new UserController()
