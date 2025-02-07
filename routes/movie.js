var express = require('express');
var router = express.Router();
var pool=require('./pool')
/* GET home page. */
router.get('/show_movie',function(req,res,next){
res.render('showmovie')
})
router.get('/get_all_movie', function(req, res, next) {
    pool.query("select * from  movie",function(error,result){
        res.json({data:result})
    })
  
});
router.get('/get_all_movies', function(req, res, next) {
    var q=`select * from movie where moviename like '%${req.query.pattern}%'`
    pool.query(q,function(error,result){
        if(error)
        {
            console.log(error)
        }
        else{

        
        res.json({data:result})
        }
    })

  
});

module.exports = router;
