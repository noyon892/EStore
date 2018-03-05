var express=require('express');
var router=express.Router();
var empModel=require.main.require('./models/emp-model');

// Request Handler

router.get('/',function(req,res){
	empModel.userlist(function(result){
		if(result && result!=null)
			{
				console.log({result: result});
				res.render('./emp/index',{result: result});
			}
		else
			{
				res.redirect('/error/regError');
			}
	});

});

//Exports

module.exports=router;

