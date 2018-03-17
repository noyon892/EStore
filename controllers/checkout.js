var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
checkoutModel=require.main.require('./models/checkout-model');
user=require.main.require('./models/user-model');


// Request Handler

router.get('/',function(req,res){

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
					console.log(allresult);
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


router.post('/',function(req,res){

});

//Exports

module.exports=router;

