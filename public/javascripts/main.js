
var app = angular.module("myApp", []); 

app.controller('chatCtrl', function($scope,$http) {
   
    var myEl = angular.element( document.querySelector('#messagebody') );
   
    $scope.usertext = ''


    $scope.sendChat = function(){

        $http.get('/response?query='+$scope.usertext).then(function(response){
            console.log(response.data);
        })
    }
  


});