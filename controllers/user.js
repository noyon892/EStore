var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');

// Request Handler

// router.get('/',function(req,res){
// 	userModel.user(function(result){
// 		if(result && result!=null)
// 			{
// 				console.log({result: result});
// 				res.render('./emp/index',{result: result});
// 			}
// 		else
// 			{
// 				res.redirect('/error/regError');
// 			}
// 	});

// });

//Exports

module.exports=router;

