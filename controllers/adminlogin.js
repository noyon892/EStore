var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
adminloginModel=require.main.require('./models/adminlogin-model');
loginValidation=require.main.require('./Validation_rule/login_validation');

// Request Handler

router.get('/',function(req,res){
	res.render('./admindashboard/adminlogin');
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
				res.render('./admindashboard/adminlogin',{errors: errors});
			}

		else
		{
			adminloginModel.loginData(data,function(valid)
			{
				if(valid)
				{
					req.session.loggedUser=data;
					res.redirect('./admindashboard/addProduct');
				}
				else
				{
					res.render('./admindashboard/adminlogin',{errorMessage:{message:'Invalid Admin Username or Password.'}});
				}
			});		
		}

	});
});

//Exports

module.exports=router;

