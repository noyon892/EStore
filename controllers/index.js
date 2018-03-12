var express=require('express');
var router=express.Router();
var dashboardModel=require.main.require('./models/dashboard-model');

// Request Handler

router.all('/',function(req,res){
	 dashboardModel.productlist(function(result){
	 	if(result && result!=null)
	 		{
	 			console.log({result: result});
	 			res.render('./index/index',{result: result});
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});

//Exports

module.exports=router;

