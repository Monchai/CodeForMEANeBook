module.exports = new function(){
    this.jwt = require("jwt-simple");
    this.secret = "xxx";
    this.cookieName = "user";
    //--------------------------------------------------
    this.readToken = function(req){                
        var token = req.cookies[this.cookieName];        
        if(token==undefined){
            token = { id : 0 };
        }else{
            token = this.jwt.decode(token, this.secret);            
        }                
        return token;
    }
    //--------------------------------------------------
    this.writeToken = function(res, id){    
        var token = { id : id};        
        token = this.jwt.encode(token, this.secret);        
        res.cookie(this.cookieName, token);    
    }
    //--------------------------------------------------
    this.clearToken = function(res){            
        this.writeToken(res, 0);        
    }
    //--------------------------------------------------
    this.isLogin = function(req){
        var token = this.readToken(req);
        console.log(token);
        if(token.id>0){
            return true;    
        }else{
            return false;    
        }
    }
    //--------------------------------------------------
    this.getID = function(req){
        var token = this.readToken(req);        
        return token.id;        
    }
    //--------------------------------------------------
}