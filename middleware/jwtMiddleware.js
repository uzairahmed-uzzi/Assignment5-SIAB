const jwt = require ('jsonwebtoken')

const secretKey = "Z@in"

const jwtAuthorization = {
    sign(payload){
    const token = jwt.sign(payload,secretKey)
    return token;
    }
}

module.exports=jwtAuthorization;