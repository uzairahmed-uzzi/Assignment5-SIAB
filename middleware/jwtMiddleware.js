const jwt = require ('jsonwebtoken')

const secretKey = "Uzzi@123"

const jwtAuthorization = {
    sign(payload){
    const token = jwt.sign(payload,secretKey)
    return token;
    }
}

module.exports=jwtAuthorization;