const {token} = require('../services');
module.exports = {
  async isUser(req, res, next) {
    if (!req.headers.token) return res.status(400).send({message: 'Parametros incorrectos para la petición'});
    const response = await token.decode(req.headers.token);
    if (!response) return res.status(403).send({message: 'No autorizado'});
    req.user = response
    next();
  },
  async isAdmin(req, res, next) {
    if (!req.headers.token) {
      return res.status(400).send({
        message: 'Parametros incorrectos para la petición'
      });
    }
    const response = await token.decode(req.headers.token);
    if (response.roles !== 'admin') return res.status(403).send({
      message: 'No autorizado'
    });
    req.user = response
    next();
  },
  async isReseller(req, res, next) {
    if (!req.headers.token) {
      return res.status(400).send({
        message: 'Parametros incorrectos para la petición'
      });
    }
    const response = await token.decode(req.headers.token);
    if (response.roles === 'pdv') return res.status(403).json({
      result: 'error',
      message: `No tiene permisos suficientes`
    })
    req.user = response
    next()
  }
};

