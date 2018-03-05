var express=require('express');
var router=express.Router();
var dashboardModel=require.main.require('./models/dashboard-model');

// Request Handler

router.get('/',function(req,res){
	dashboardModel.userlist(function(result){
		if(result && result!=null)
			{
				console.log({result: result});
				res.render('./dashboard/index',{result: result});
			}
		else
			{
				res.redirect('/error/regError');
			}
	});

});

//Exports

module.exports=router;

