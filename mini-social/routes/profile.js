var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    if(permission.isLogin(req)){
        next();    
    }else{
        res.redirect("authen/login");
    }
});
//=======================================================
router.get('/', function(req, res, next) {

    var id = permission.getID(req);
    
    webboard.loadProfile(id, function(result){
        res.render("profile", result);
    }, function(errorMessage){
        res.send(errorMessage);
    });

});
//=======================================================
module.exports = router;

//    var data = {
//        login : "Guest",
//        displayname : "Guest"
//    }   
//    res.render("profile", data);