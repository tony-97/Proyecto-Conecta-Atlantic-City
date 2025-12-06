var express = require("express");
var router = express.Router();
const { Usuario } = require("../models");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* POST login */
router.post("/login", async function (req, res, next) {
  const { usuario, contrasena } = req.body;

  try {
    const user = await Usuario.findOne({
      where: { usuario: usuario, contrasena: contrasena },
    });

    if (user) {
      // Store user information in the session
      req.session.user = { id: user.id, usuario: user.usuario, rol: user.rol };
      res.redirect("/dashboard");
    } else {
      res.render("login", {
        title: "Login",
        error: "Credenciales incorrectas. Por favor, intente de nuevo.",
      });
    }
  } catch (error) {
    next(error);
  }
});

/* GET logout */
router.get("/logout", function (req, res, next) {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
