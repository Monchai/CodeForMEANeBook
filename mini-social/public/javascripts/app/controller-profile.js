    app.controller("ProfileController", function($scope, $http){
    
        $scope.TopicHistory = [];
        $scope.CommentHistory = [];
        //------------------------------------------------
        $scope.loadHistory = function(){
            $scope.loadTopicHistory();
            $scope.loadCommentHistory();
        }
        //------------------------------------------------    
        $scope.loadTopicHistory = function(){
            var url = "/message/history_topic";
            $http.get(url).success(function(result){
                $scope.TopicHistory = result.data;
            }).error(function(errorMessage){
                alert("Error");
            });        
        }
        //------------------------------------------------    
        $scope.loadCommentHistory = function(){
            var url = "/message/history_reply";
            $http.get(url).success(function(result){
                $scope.CommentHistory = result.data;                
            }).error(function(errorMessage){
                alert("Error");
            });        
        }
        //------------------------------------------------    
        
    });
