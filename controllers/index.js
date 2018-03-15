var express=require('express');
var router=express.Router();
var dashboardModel=require.main.require('./models/admindashboard-model');

// Request Handler

router.all('/',function(req,res){
	 dashboardModel.productlist(function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/index',{result: result});
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});


router.all('/productdetails/:id?',function(req,res){

	var data={
		id: req.params.id
	};
	 dashboardModel.productdetails(data,function(result){
	 	if(result && result!=null)
	 		{
	 			res.render('./index/productdetails',{result: result});
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});
router.post('/:catagory?',function(req,res){
	var data={
		catagory: req.body.catagory
	};
	 dashboardModel.searchproduct(data,function(result){
	 	if(result && result!=null)
	 		{
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

