var express=require('express');
var router=express.Router();

// Request Handler

router.get('/',function(req,res){
	 req.session.destroy(function(){
     // cannot access session here 
   });
	 res.redirect('./login');
});

//Exports

module.exports=router;

