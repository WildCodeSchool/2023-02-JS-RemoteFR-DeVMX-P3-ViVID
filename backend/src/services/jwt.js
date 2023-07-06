const jwt = require("jsonwebtoken");

function createToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET);
}

module.exports = { createToken };
