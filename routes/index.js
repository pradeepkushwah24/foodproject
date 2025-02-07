var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/learncookie', function(req, res, next) {
  res.setHeader('set-cookie',"Data=foodproject")
  res.render('index', { title: 'Express' });
});

router.get('/set-cookie', function(req, res, next) {
  res.cookie("myname","Pradeep")
  res.cookie("City","Gwalior")
  res.cookie("state","M.P")


  res.render('index', { title: 'Express' });
});
router.get('/getcookie', function(req, res, next) {
  var mycookie=req.cookies
  console.log(mycookie)
  res.render('index', { title: mycookie });
});
module.exports = router;
