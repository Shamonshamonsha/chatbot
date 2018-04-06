
var app = angular.module("myApp", []); 

app.controller('chatCtrl', function($scope,$http,$filter) {
   
    var myEl = angular.element( document.querySelector('#messagebody') );
   
    $scope.usertext = '';
    $scope.loading  = 'Send'; 

    $scope.currentDate = new Date();

   
    $scope.test = function(event){
       if(event.keyCode == 13){
           $scope.sendChat();
       }
    }

    $scope.sendChat = function(){


        if($scope.usertext==''){
            return;
        }

        var query =  $scope.usertext;

        let user ='<div class="row msg_container base_sent"><div class="col-xs-9 col-md-9"><div class="messages msg_sent"><p>'+query+'</p><time >'+$filter('date')(new Date(), 'd-MM-y | h:mm:s a')+'</time></div></div><div class="col-xs-2 avatar"><img src="user.png" width="100%" class="chatimg"></div></div>';

        myEl.append(user);

        $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'fast');

        $scope.usertext = '';
        $scope.loading = 'Typing';

        $http.get('/response?query='+query).then(function(response){

            $scope.loading = 'Send';

            console.log(response.data);
            let bot ='<div class="row msg_container base_receive" ><div class="col-md-2 col-xs-2 avatar"><img src="govt.png" class="chatimg img-responsive "></div><div class="col-xs-9 col-xs-offset"><div class="messages msg_receive"><p>'+response.data.botReply+'</p><time>'+$filter('date')(new Date(), "d-MM-y | h:mm:s a")+'</time> </div> </div></div>';

            myEl.append(bot);

            $("#messagebody").animate({ scrollTop: $("#messagebody")[0].scrollHeight}, 'fast');
           



        },function(error){
            console.log("Error",error);
        })
    }
  


});

