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
  
    console.log("From user",JSON.stringify(req.body));
    custom.customResult(req.body.result.contexts[0].parameters.number,(result)=>{

        let text = (result)?'Hi '+result.name+result.message:'No details found for this number';
        
       
       
        res.json({
        'speech':text,
        'displayText':'Result from webhook'
        });
    });

   
});

module.exports = router;
