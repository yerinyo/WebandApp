var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    //res.send(email+","+password);
    res.render('register',{email:email,password:password})
});
module.exports = router;
