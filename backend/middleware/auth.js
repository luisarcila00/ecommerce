const {token} = require('../services');
module.exports = {
  async isUser(req, res, next) {
    if (!req.headers.token) return res.status(404).send({message: 'No a token'});
    const response = await token.decode(req.headers.token);
    if (!response) return res.status(401).send({message: 'No autorizado'});
    req.user = response
    next();
  },
  async isAdmin(req, res, next) {
    if (!req.headers.token) {
      return res.status(404).send({
        message: 'No token'
      });
    }
    const response = await token.decode(req.headers.token);
    if (response.roles !== 'admin') return res.status(401).send({
      message: 'No autorizado'
    });
    req.user = response
    next();
  },
  async isReseller(req, res, next) {
    if (!req.headers.token) {
      return res.status(404).send({
        message: 'No token'
      });
    }
    const response = await token.decode(req.headers.token);
    if (response === 'pdv') return res.status(401).json({
      result: 'error',
      message: `No tiene permisos suficientes`
    })
    req.user = response
    next()
  }
};

