const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign({
      id,
      email,
      role,
    },
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
  )
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest("incorrect email or password"))
    }

    const candidate = await User.findOne({where: {email}})

    if (candidate) {
      return next(ApiError.badRequest("User with same email already used"))
    }

    //creat hashing password, salt it number of repeating
    const hashPassword = await bcrypt.hash(password, 5)

    //user and user-basket creating
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.id})

    //jwt creating 1-user data for sing, 2-secret key, 3-options object
    const token = generateJwt(user.id, email, user.role)

    res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body

    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.badRequest("user not found"))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.badRequest("password is incorrect"))
    }

    const token = generateJwt(user.id, user.email, user.role)

    return res.json({token})
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)

    res.json({token})
  }
}

module.exports = new UserController()
