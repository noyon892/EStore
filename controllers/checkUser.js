var express=require('express');
var router=express.Router();
checkmodel=require.main.require('./models/checkuser-model');


// Request Handler
router.post('/username',function(req,res){
	var data={ username: req.body.value };
	checkmodel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});
router.post('/email',function(req,res){
	var data={ email: req.body.value };
	checkmodel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});

//Exports

module.exports=router;

