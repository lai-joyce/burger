var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.

//index redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//add a new burger
router.post("/burger/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/index");
  });
});

//eat a burger
router.post("/burger/eat/:id", function(req, res) {
	burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

// Export routes for server.js to use.
module.exports = router;