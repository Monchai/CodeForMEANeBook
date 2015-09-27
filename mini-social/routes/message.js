var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    if(permission.isLogin(req)){
        next();    
    }else{
        res.json({message : "Access Denied"});    
    }
});
//===================================================================
router.get('/', function(req, res, next) {
    //console.log(permission.readToken(req));
    res.send("Message Controller");
});
//--------------------------------------------------------------------
router.get('/feed', function(req, res, next) {     
    webboard.listHeader(function(errorMessage){
        console.log(errorMessage);
        res.send("Error");
    }, function(data){
        res.json(data);
    });
});
//--------------------------------------------------------------------
router.get("/topic/:id", function(req, res, next){
    var header_id = req.params.id;
    
    webboard.updateHeader(header_id, header_id, true, false, function(err, hid){
        if(err) console.log(err);
        
        webboard.getHeader(hid, function(result){
            res.json(result);
        }, function(errorMessage){
            res.json({ message : errorMessage});
        });
        
    });
    
});
//--------------------------------------------------------------------
router.get("/reply/:id", function(req, res, next){
    var header_id = req.params.id;    
    webboard.getReply(header_id, function(data){
        res.json(data);
    }, function(errorMessage){
        res.json({ message : errorMessage});
    });
    
});
//--------------------------------------------------------------------
router.post("/save", function(req, res, next){
    webboard.saveHeader(permission.getID(req), req.body.title
                        , req.body.content, function(id){
        res.json({ id: id});
    }, function(errorMessage){
        res.json({ message : errorMessage});
    });    
});
//--------------------------------------------------------------------
router.post("/reply", function(req, res, next){
    var user_id = permission.getID(req);
    var header_id = req.body.header_id;
    var content = req.body.content; 
    webboard.saveReply(user_id, header_id, content, function(reply_id){
        
        webboard.updateHeader(header_id, reply_id, false, true, function(err, id){
            if(err) console.log(err);
            res.json({ id : id});
        });

    }, function(errorMessage){
        res.json({ message : errorMessage});
    });
});
//--------------------------------------------------------------------
router.get("/history_topic", function(req, res, next){
    var id = permission.getID(req);
    webboard.loadTopicHistory(id, function(data){
        res.json({ data : data});
    }, function(errorMessage){
        res.json({ message : message});
    });
});
//--------------------------------------------------------------------
router.get("/history_reply", function(req, res, next){
    var id = permission.getID(req);
    webboard.loadCommentHistory(id, function(data){
        res.json({ data : data});
    }, function(errorMessage){
        res.json({ message : message});
    });
});
//===================================================================
module.exports = router;

