var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
checkoutModel=require.main.require('./models/checkout-model');
user=require.main.require('./models/user-model');


// Request Handler

router.all('/',function(req,res){

	if(req.session.cart.length==0)
	{
		res.redirect('/index');
	}

	else
	{
		if(req.session.loggedUser!=null)
		{
			var data={
				username: req.session.loggedUser
			};
			user.user(data,function(result){
				if(result!=null && result)
				{
					var allresult={
						cart: req.session.cart,
						user: result
					};
					res.render('./checkout/checkout',{result: allresult});
				}				
			});
}
		else
		{
			res.redirect('/login');
		}	
	}
	
});



router.get('/placeorder',function(req,res){
	res.render('./error/error');
});

router.post('/placeorder',function(req,res){


	if(req.session.cart.length==0)
	{
		res.redirect('/index');
	}

	else
	{


		if(req.session.loggedUser!=null)
		{

				var info={
					username: req.session.loggedUser

				}
				var sessioncart=req.session.cart;
				var productcart={sessioncart};
				user.user(info,function(userid){
					for(var i=0;i<req.session.cart.length;i++)
					{
						
						
						var data={
							productid: productcart.sessioncart[i].id,
							userid: userid[0].id,
							quantity: req.body.quantity[i],
							price: req.body.price[i],
							address: req.body.address,
							zipcode: req.body.zip_code
						};
						checkoutModel.placeorder(data,function(valid){
							
							if(valid)
							{
								res.render('./checkout/thanks');
							}
							else
							{
								res.redirect('/error');
							}
						});	
					}
				});
}
		else
		{
			res.redirect('/login');
		}	
	}
	
});



//Exports

module.exports=router;

