var express=require('express');
var router=express.Router();
var cart=require.main.require('./models/cart-model');

// Request Handler



router.get('/',function(req,res){
	res.render('./cart/cart',{result: req.session.cart});
});

router.all('/addtocart/:id?',function(req,res){
	var data={
		id: req.params.id
	};


		 cart.addtocart(data,function(result){
		 	if(result && result!=null)
		 		{
		 			if(req.body.quantity<=result[0].quantity)
		 			{
			 			var product ={
			 				id: req.params.id,
			 				productname: result[0].productname,
			 				price: result[0].price,
			 				catagory: result[0].catagory,
			 				quantity: req.body.quantity
			 			};

			 			var productcart=[];
			 			
			 			if(req.session.cart!=null)
			 			{
			 				productcart=req.session.cart;
			 				productcart.push(product);
			 				req.session.cart=productcart;	
			 				res.redirect('/index'); 				
			 			}
			 			else
			 			{
							productcart.push(product);
							req.session.cart=productcart;
							res.redirect('/index');
			 			}
		 			}

		 			else
		 			{
		 				
		 				res.redirect('/index/productdetails/'+req.params.id);
		 				
		 			}
		 		
		 		}
		 	else
		 		{
		 			res.render('./error/error');
		 		}

		 });



});

router.get('/removecart/:id?',function(req,res){
	
	var id= req.params.id;

	var	productcart=[];
		if(req.session.cart!=null){
			productcart=req.session.cart;

			for (var i =0; i < productcart.length; i++)
			{
				if (productcart[i].id === id)
				{
					productcart.splice(i,1);
					break;
				}
			}
		req.session.cart=productcart;
		}
	res.redirect('/cart');
});

router.get('/editcart/:id?',function(req,res){
	
	var id= req.params.id;

	var	productcart=[];
		if(req.session.cart!=null){
			productcart=req.session.cart;

			for (var i =0; i < productcart.length; i++)
			{
				if (productcart[i].id === id)
				{
					productcart.splice(i,1);
					break;
				}
			}
		req.session.cart=productcart;
		}
	res.redirect('/checkout');
});




//Exports
module.exports=router;

