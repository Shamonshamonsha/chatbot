var express = require('express');
var router = express.Router();


var services = require('../services/main');

var  webhook = require('../services/webhook');

/* GET home page. */
router.get('/', function(req, res, next) {

  services.botResponse({
    userQuery:req.query.query
  },(result)=>{

      res.json({
         botReply:result     
      })
  });

 
});

router.post('/custom',function(req,res,next){
   console.log("Response from",req.body);
   res.json({
       'speech':'Hello from webhook',
       'displayText':'Result from webhook'
   });
});

module.exports = router;
