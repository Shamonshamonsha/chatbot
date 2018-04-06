var request = require("request");

var config  = require('../config');

module.exports = {


    botResponse:function(params,callback){

        let options = { 
            method: 'GET',
            url: config.apiUrl+'query?v=20150910&lang=en&query='+params.userQuery+'&sessionId='+Math.random(),
              headers: 
              { 
                  'cache-control': 'no-cache',
                  authorization: 'Bearer '+config.clientAccessToken
              } 
          };

          request(options, function (error, response, body) {


           // console.log("Response from dialog flow",body);

            if(error){
                console.log("Error",error);
                return callback(config.defaultFallBack)
            }


           let result = JSON.parse(body);

           if(result.status.code!=200){
               return callback(config.defaultFallBack)
           }


           let message = (result.result.fulfillment.speech && result.result.fulfillment.speech=='')?config.defaultFallBack:result.result.fulfillment.speech;
        

            return callback(message);
           
          });
    }

}