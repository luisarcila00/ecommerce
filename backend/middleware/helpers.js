const {validationResult} = require("express-validator");
module.exports = {
  validation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({result: 'error', message: errors.errors[0].msg});
    next()
  },
}
