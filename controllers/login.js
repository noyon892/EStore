var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
loginModel=require.main.require('./models/login-model');
loginValidation=require.main.require('./Validation_rule/login_validation');

// Request Handler

router.get('/',function(req,res){
	res.render('./login/index');
});

router.post('/',function(req,res){
	var data={
		username: req.body.username,
		password: req.body.password
	};
	var validator=new asyncValidator(loginValidation.login);
	validator.validate(data,function(errors,fields){
		if(errors)
			{
				res.render('./login',{errors: errors});
			}

		else
		{
			loginModel.loginData(data,function(result)
			{
				if(result)
				{
					req.session.loggedUser=data.username;
					res.render('./user/userprofile',{result: result});
				}
				else
				{
					res.render('./login',{errorMessage:{message:'Invalid Username or Password.'}});
				}
			});		
		}

	});
});

//Exports

module.exports=router;

