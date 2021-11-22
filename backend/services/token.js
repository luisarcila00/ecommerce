const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');

async function checkToken(token) {
  let __id = null;
  try {
    const {id} = await jwt.decode(token);
    __id = id;
  } catch (e) {
    return false;
  }
  let user = await User.findById(__id).lean();
  console.log(user._id, user.full_name)
  if (user) {
    const token = jwt.sign({
      id: __id,
      rol: user.roles
    }, process.env.SECRET_TOKEN || 'your-256-bit-secret', {expiresIn: '1d'});
    return user;
  } else {
    return false;
  }
}

module.exports = {
  //generar el token
  encode: async (payload) => {
    const token = jwt.sign(payload, process.env.SECRET_TOKEN || 'your-256-bit-secret', {expiresIn: '1d'});
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      const {id} = await jwt.verify(token, process.env.SECRET_TOKEN || 'your-256-bit-secret');
      let user = await User.findById(id).lean()
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        const newToken = await checkToken(token);
        return newToken;
      } else {
        return false
      }
    }
  }
}