const { verify } = require("argon2");
const models = require("../models");
const { createToken } = require("../services/jwt");

const login = (req, res) => {
  const { email, password } = req.body;

  // vérifier email

  models.users
    .findOneByEmail(email)
    .then(([[user]]) => {
      // si on a pas de user, on répond dégage
      if (!user) {
        res.status(404).json({ error: "No user with this email." });
      }

      // on vérifie les mots de passe (le hashé en DB et celui envoyé du front)
      verify(user.hpassword, password)
        .then((result) => {
          if (!result) {
            res.status(404).json({ error: "Passwords didn't match." });
          }

          // email + mdp = ok => on crée un token
          else {
            const token = createToken({
              // les infos à mettre dans le token
              id: user.id,
              email: user.email,
            });
            const currentuser = user;
            delete currentuser.hpassword;
            res
              .status(200)
              .cookie("token", token, { httpOnly: true, secure: false })
              .json({ currentuser });
          }
        })
        .catch((err) => {
          console.info(err);
        });
    })
    .catch((err) => console.info(err));

  // vérifier password

  // crée un token, je le mets dans un cookie

  // je renvoie au front le cookie avec le token dedans + des infos sur le user
};
module.exports = { login };
