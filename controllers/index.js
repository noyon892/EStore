var express=require('express');
var router=express.Router();

// Request Handler

router.get('/',function(req,res){
	 res.render('./index/index');
});

//Exports

module.exports=router;

