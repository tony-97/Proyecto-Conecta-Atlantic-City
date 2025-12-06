var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function (req, res, next) {
  // If user is already logged in, redirect to dashboard
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("login", { title: "Login", error: null });
});

/* GET dashboard page. */
router.get("/dashboard", function (req, res, next) {
  // If user is not logged in, redirect to login page
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("index", { title: "Dashboard", user: req.session.user });
});

module.exports = router;
