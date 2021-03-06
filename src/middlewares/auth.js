const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

module.exports = (req, res, next) => {
  const { token } = req.cookies;

  if ((!token || token) && req.url === '/auth') return next();

  jwt.verify(token, secret, (err) => {
    if (err) {
      return res.redirect(401, 'https://localhost:8080/login')
    }
    next();
  });
};
