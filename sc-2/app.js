var fs = require("fs");
var sourceFileName = "./source-folder/avatar.png";
var targetFileName = "./target-folder/avatar.png";

fs.exists(sourceFileName, function(isExists){  
    if(isExists){        
        if(fs.existsSync(targetFileName)){
            console.log("Cannot rename or move File");
            console.log("File name is duplicate.");                 
        }else{
            fs.renameSync(sourceFileName, targetFileName);        
            console.log("Success Change and Remove File.");                
        }        
    }else{
        console.log("Cannot rename or move File");
        console.log(sourceFileName+" is not exists.");
    }  
});
