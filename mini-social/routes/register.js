var express = require('express');
var router = express.Router();
//=======================================================
router.get('/', function(req, res, next) {
  res.render("register.html");
});
//-------------------------------------------------------
router.post('/save', function(req, res, next) {

    var loginname = req.body.loginname;
    var password = req.body.password;
    var displayname = req.body.displayname;

    console.log(loginname);
    console.log(password);
    console.log(displayname);
    
    webboard.createLogin(loginname, password, displayname, function(id){
        res.json({ id : id});
    }, function(errorMessage){
        console.log(errorMessage);
        res.json({ message : errorMessage});
    });
    
});
//=======================================================
module.exports = router;
