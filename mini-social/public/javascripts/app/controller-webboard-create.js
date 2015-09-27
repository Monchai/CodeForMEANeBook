app.controller("CreateController", function($scope, $http, $location){
    $scope.Title = "";
    $scope.Content = "";
    $scope.saveTopic = function(){
        if($scope.Title.trim().length==0){
            alert("ใส่ข้อมูล Title ด้วย");    
            return false;
        }
        if($scope.Content.trim().length==0){
            alert("ใส่ข้อมูล Content ด้วย");    
            return false;
        }
        var url = "/message/save";
        var data = { title : $scope.Title, content : $scope.Content}
        $http.post(url, data).success(function(result){
            if(result.id){
                $location.path("/topic/"+result.id);
                //$location.path("/topic");
            }else{
                alert(result.message);    
            }
        }).error(function(){
            alert("Error");
        });
    }

});

