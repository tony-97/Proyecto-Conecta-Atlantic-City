var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboard_controller");

/* GET login page. */
router.get("/", function (req, res, next) {
  // If user is already logged in, redirect to dashboard
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("login", { title: "Login", error: null });
});

/* GET dashboard page. */
router.get("/dashboard", dashboardController.getDashboard);

module.exports = router;
