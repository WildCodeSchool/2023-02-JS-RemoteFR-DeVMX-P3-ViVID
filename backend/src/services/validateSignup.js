const joi = require("joi");

const validateSignup = (req, res, next) => {
  const schema = joi.object({
    firstname: joi.string().allow("required"),
    lastname: joi.string().allow("required"),
    email: joi.string().email().presence("required"),
    password: joi.string().presence("required"),
    confirmPassword: joi.string().presence("required"),
  });
  const { firstname, lastname, email, password, confirmPassword } = req.body;
  const { value, error } = schema.validate({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  });
  if (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  } else {
    req.body = value;
    next();
  }
};

module.exports = validateSignup;
