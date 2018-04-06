var express = require('express');
var router = express.Router();


var services = require('../services/main');

var  custom = require('../services/webhook');

/* GET home page. */
router.get('/response/', function(req, res, next) {

  services.botResponse({
    userQuery:req.query.query
  },(result)=>{

      res.json({
         botReply:result     
      })
  });

 
});

router.post('/custom',function(req,res,next){
  
    custom.customResult(req.body.result.resolvedQuery);

   res.json({
       'speech':'Hello from webhook',
       'displayText':'Result from webhook'
   });
});

module.exports = router;
