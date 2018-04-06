var express = require('express');
var router = express.Router();


var services = require('../services/main');

var  custom = require('../services/webhook');

/* GET home page. */
router.get('/response', function(req, res, next) {

  services.botResponse({
    userQuery:req.query.query
  },(result)=>{

      res.json({
         botReply:result     
      })
  });

 
});

router.post('/custom',function(req,res,next){
  
    console.log("From user",req.body.result.resolvedQuery);
    custom.customResult(req.body.result.resolvedQuery,(result)=>{
       console.log('ok',result);
       res.json({
        'speech':'Your details are '+result.name,
        'displayText':'Result from webhook'
        });
    });

   
});

module.exports = router;
