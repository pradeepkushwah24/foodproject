var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login_interface', function(req, res, next) {
  res.render('logininterface');
});

module.exports = router;
