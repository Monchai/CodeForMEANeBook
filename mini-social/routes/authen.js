var express = require('express');
var router = express.Router();
//===================================================================
router.get('/', function(req, res, next) {
    res.send("authen controller");
});
//-------------------------------------------------------------------
router.get('/login', function(req, res, next) {
    console.log(permission.readToken(req));
    permission.clearToken(res);
    res.render("login");
});
//-------------------------------------------------------------------
router.post('/login', function(req, res, next) {
    var loginname = req.body.loginname;
    var password = req.body.password;
    
    webboard.checkLogin(loginname, password, function(id){
        permission.writeToken(res, id);
        res.json({ id: id});
    }, function(errorMessage){
        console.log(errorMessage);
        res.json({ message : errorMessage});
    });
    
});
//-------------------------------------------------------------------
router.get('/logout', function(req, res, next) {
    
    res.redirect("/authen/login");
});
//===================================================================
module.exports = router;