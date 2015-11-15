var fs = require("fs");
var sourceFileName = "./source-folder/avatar.png";
var targetFileName = "./target-folder/avatar.png";

var targetFolder = "./target-folder/";

if(!fs.existsSync(targetFolder)){
//    console.log("Folder : "+targetFolder+" not Exists");
    fs.mkdirSync(targetFolder);
    console.log("Create Folder : "+targetFolder);    
}

fs.renameSync(sourceFileName, targetFileName);
console.log("Move File Success.");    


