var express = require('express');
var router = express.Router();

var multiparty = require("multiparty");

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
//-------------------------------------------------------
router.post('/update', function(req, res, next){
    
    var imgForm = new multiparty.Form({
        autoFiles : true,
        uploadDir : path_temp
    });
    
    imgForm.parse(req, function(err, fields, files){

        var id = permission.getID(req);        
        var displayname = fields.txtDisplayName[0];
        var loginname = fields.txtLoginName[0];
        var password = fields.txtPassword[0];
        
        var imgFileNames = files.avatar_file[0].originalFilename.split(".");
        var newFileName = id+"."+imgFileNames[imgFileNames.length-1];
        var imageFullPath = path_public+"\\avatar\\"+newFileName;
        
        var fs = require("fs");
        
        fs.renameSync(files.avatar_file[0].path
                      , imageFullPath);
        
        webboard.updateProfile(id, displayname, 
                               loginname, password, 
                               newFileName, function(){
            
            res.redirect("/profile");                
        });        
//        res.redirect("/profile");        
    });
});
//=======================================================
module.exports = router;
