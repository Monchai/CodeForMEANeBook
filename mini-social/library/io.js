module.exports = function(server){

    var io = require("socket.io")(server)    
    //--------------------------------------------
    io.on("connect", function(sockets){
        console.log("Connect");
        
        sockets.on("update-webboard", function(data){
            console.log(data);
            //io.sockets.emit("update-trigger", data);
            sockets.broadcast.emit("update-trigger", data);
        });
    });
    
    console.log("io init success");
}

