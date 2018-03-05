var express=require('express');
var router=express.Router();
regModel=require.main.require('./models/reg-model');
var passwordHash=require('password-hash');

// Request Handler

router.get('/',function(req,res){
	res.render('./reg/reg');
	
});
router.post('/',function(req,res){
	var data={
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		phone: req.body.phone,
		password: passwordHash.generate(req.body.password),
		address: req.body.address
	};
	
	if(req.body.name!='' && req.body.username!='' && req.body.email!='' && req.body.password!='' && req.body.cpassword!='')
	{
		if(req.body.password==req.body.cpassword)
		{
			regModel.validateUser(data,function(valid)
			{
				console.log(valid);
				if(valid=='wrong username')
				{
					res.render('/error/unavailable');
					return;
				}
				if(valid)
				{
					res.redirect('./login');
				}
				else
				{
					res.redirect('./error/regError');
				}
			});
		}
		else
		{
			res.redirect('./error/regError');
		}
	}
	else
		{
			res.redirect('./error/regError');
		}
});

//Exports

module.exports=router;

