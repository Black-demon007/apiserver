const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next) =>{
    const token = !!req?.headers["authorization"] ? req?.headers["authorization"].split(' ')[1] : null
    if(!token){
      return res.status(401).json({ status: false, error: "Authorization Token Is Required", message: "An Authorization Token Is Required For Authentication !"});
    }
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_KEY)
      req.user = decoded
    } catch (error) {
      return res.status(401).json({ status: false, message: "Authorization Token Is Not Valid !", error: error })
    }
    next()
}
module.exports = verifyToken;
