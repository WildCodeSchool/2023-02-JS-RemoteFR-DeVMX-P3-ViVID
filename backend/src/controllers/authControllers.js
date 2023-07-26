const { verify } = require("argon2");
const models = require("../models");
const { createToken } = require("../services/jwt");

const login = (req, res) => {
  const { email, password } = req.body;

  models.auth
    .findOneByEmail(email)
    .then(([[user]]) => {
      if (!user) {
        res.status(404).json({ error: "No user with this email." });
      }

      verify(user.hpassword, password)
        .then((result) => {
          if (!result) {
            res.status(404).json({ error: "Passwords didn't match." });
          } else {
            const token = createToken({
              id: user.id,
              email: user.email,
            });
            const currentuser = user;
            delete currentuser.hpassword;
            res
              .status(200)
              .cookie("token", token, { httpOnly: false, secure: false })
              .send({ currentuser, token });
          }
        })
        .catch((err) => {
          console.info(err);
        });
    })
    .catch((err) => console.info(err));
};

module.exports = { login };
