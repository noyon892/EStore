var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
var dashboardModel=require.main.require('./models/dashboard-model');
productValidation=require.main.require('./Validation_rule/product_validation');
// Request Handler

// router.get('/user',function(req,res){
// 	dashboardModel.userlist(function(result){
// 		if(result && result!=null)
// 			{
// 				console.log({result: result});
// 				res.render('./dashboard/index',{result: result});
// 			}
// 		else
// 			{
// 				res.redirect('/error/error');
// 			}
// 	});

// });


router.get('/addProduct',function(req,res){
	res.render('./dashboard/admin-dashboard');
});

router.post('/addProduct',function(req,res){
	var data={
		productname: req.body.productname,
		price: req.body.price,
		quantity: req.body.quantity,
		catagory: req.body.catagory,
		image1: req.body.image1,
		image2: req.body.image2,
		image3: req.body.image3,
		details: req.body.details
	};
	var validator=new asyncValidator(productValidation.product);
	validator.validate(data,function(errors,fields){
		if(errors){
				res.render('dashboard/admin-dashboard',{errors:errors});
		}
		else
		{
			dashboardModel.productInsert(data,function(valid){
				if(valid)
				{
					res.redirect('/dashboard/productlist');
				}
				else
				{
					res.redirect('/error/error');
				}
			});
		}
	});

});

router.all('/productlist',function(req,res){
	dashboardModel.productlist(function(result){
		if(result && result!=null)
			{
				console.log({result: result});
				res.render('./dashboard/productlist',{result: result});
			}
		else
			{
				res.render('./error/error');
			}
	});
});



//Exports

module.exports=router;

