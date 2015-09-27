    var app = angular.module("MiniSocial", ["ngRoute"]);      
    app.config(function($routeProvider){
        $routeProvider.when("/", {
            controller	: "WebboardController"
            , templateUrl 	: "/javascripts/app/webboard-list.html" 
        }).when("/create", {
            controller	: "CreateController"
            , templateUrl 	: "/javascripts/app/webboard-create.html" 
        }).when("/topic/:id", {
            controller	: "TopicController"
            , templateUrl 	: "/javascripts/app/webboard-topic.html" 
        }).otherwise({
            redirectTo	: "/"
        });
    });    

