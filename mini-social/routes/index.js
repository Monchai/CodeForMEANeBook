var express = require('express');
var router = express.Router();
//===================================================================
router.get('/', function(req, res, next) {
    if(permission.isLogin(req)){
        res.render("webboard.html");    
    }else{
        res.redirect("/authen/login");
    }    
});
//===================================================================
module.exports = router;
