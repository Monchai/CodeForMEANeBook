app.controller("TopicController", function($scope, $http, $routeParams
                                            , $sce, $window){
    $scope.CurrentTopicID = $routeParams.id;
    $scope.ReplyContent = "";
    $scope.Topic = {};
    $scope.Reply = [];    
    $scope.bindHTML = function(data){
        return $sce.trustAsHtml(data);
    }
    $scope.loadHeader = function(){
        var url = "/message/topic/"+$scope.CurrentTopicID;
        $http.get(url).success(function(data){
            $scope.Topic = data;
            console.log(data);
            $scope.loadReply();
        }).error(function(){
            alert("Error");
        });
    }
    $scope.loadReply = function(){
        var url = "/message/reply/"+$scope.CurrentTopicID;
        $http.get(url).success(function(data){
            $scope.Reply = data;             
        }).error(function(){
            alert("Error load Reply");
        });
    }
    $scope.saveReply = function(){
        if($scope.ReplyContent.trim().length==0){
            alert("กรุณาใส่ข้อมูลการตอบกระทู้");    
        }else{
            var url = "/message/reply";
            var data = { header_id : $scope.CurrentTopicID
                        , content : $scope.ReplyContent}
            $http.post(url, data).success(function(result){
                
                $scope.loadReply();
                $scope.socket.emit("update-webboard", $scope.CurrentTopicID); 
            }).error(function(){
                alert("Error Save Reply");
            });
        }
    }
    //--------------------------------------------------
    $scope.socket = $window.io.connect(); 
    $scope.socket.on("update-trigger", function(data){
        if(data==$scope.CurrentTopicID){
            $scope.loadReply();
        }
    });

});


