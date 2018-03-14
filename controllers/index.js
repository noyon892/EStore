var express=require('express');
var router=express.Router();
var index=require.main.require('./models/index');
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
	 index.productdetails(data,function(result){
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


router.all('/addtocart/:id?',function(req,res){
	var data={
		id: req.params.id
	};
	 index.addtocart(data,function(result){
	 	if(result && result!=null)
	 		{
	 			var product ={
	 				productname: result[0].productname,
	 				price: result[0].price,
	 				catagory: result[0].catagory,
	 				quantaty: 1
	 			};

	 			var productcart=[];
	 			
	 			if(req.session.cart!=null)
	 			{
	 				productcart=req.session.cart;
	 				productcart.push(product);
	 				req.session.cart=productcart;	
	 				res.redirect('/'); 				
	 			}
	 			else
	 			{
					productcart.push(product);
					req.session.cart=productcart;
					res.redirect('/');
	 			}
	 		}
	 	else
	 		{
	 			res.render('./error/error');
	 		}
	 });
});

router.get('/showcart',function(req,res){
	res.render('./index/cart',{result: req.session.cart});
});




//Exports
module.exports=router;

