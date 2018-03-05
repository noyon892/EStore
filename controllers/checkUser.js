var express=require('express');
var router=express.Router();
checkModel=require.main.require('./models/checkUser-Model');


// Request Handler
router.post('/username',function(req,res){
	var data={ username: req.body.value };
	checkModel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});
router.post('/email',function(req,res){
	var data={ email: req.body.value };
	checkModel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});

router.get('/',function(req,res){
	res.send("WHEEE");
});
//Exports

module.exports=router;

