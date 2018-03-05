var express=require('express');
var router=express.Router();
loginModel=require.main.require('./models/login-model');
// Request Handler

router.get('/',function(req,res){
	res.render('./login/index');
});
router.post('/',function(req,res){
	var data={
		username: req.body.username,
		password: req.body.password
	};
	
	loginModel.loginData(data,function(valid)
	{
		if(valid)
		{
			req.session.loggedUser=data;
			res.redirect('./dashboard');
		}
		else
		{
			res.redirect('./error/loginError');
		}
	});
});

//Exports

module.exports=router;

