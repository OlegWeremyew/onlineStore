const jwt = require('jsonwebtoken')

module.exports = function (role) {
  return function (req, res, next) {
    if (req.methods === "OPTIONS") {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1] //Bearer dfdf
      if (!token) {
        return res.status(401).json({message: "no authorized"})
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if (decoded.role !== role) {
        return res.status(403).json({message: "access denied"})
      }
      req.user = decoded
      next()
    } catch (e) {
      res.status(401).json({message: "no authorized"})
    }
  }

}

