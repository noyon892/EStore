var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
checkoutModel=require.main.require('./models/checkout-model');


// Request Handler

router.get('/',function(req,res){

	if(req.session.cart.length=0)
	{
		res.redirect('/index');
	}

	else
	{
		if(req.session.loggedUser!=null)
		{
			res.redirect('/reg');
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

