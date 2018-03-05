var express=require('express');
var router=express.Router();

router.get('/loginError',function(req,res){
	res.render('./error/loginError');
});

router.get('/regError',function(req,res){
	res.render('./error/regError');
});

module.exports=router;