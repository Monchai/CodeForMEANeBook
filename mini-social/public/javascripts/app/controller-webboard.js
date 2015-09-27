    app.controller("WebboardController", function($scope, $http){
    
        $scope.Topics = [];
        //------------------------------------------------
        $scope.listTopic = function(){
            var url = "/message/feed";
            $http.get(url).success(function(data){
                $scope.Topics = data;
                console.log(data);
            }).error(function(data){
                alert("Error");
            });
        }
        //------------------------------------------------    
        
    });
