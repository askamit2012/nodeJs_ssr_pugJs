var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, response, next) {
  let user = {};
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((res) => {
      user = res.results[0];
      console.log("user: ", user)
      response.render("users", { user: user })
    });
});

module.exports = router;
