//Diclaration
var express=require('express');
var app=express();
var login=require('./controllers/login');
var emp=require('./controllers/emp');
var reg=require('./controllers/reg');
var dashboard=require('./controllers/dashboard');
var error=require('./controllers/error');
var logout=require('./controllers/logout');
var checkUser=require('./controllers/checkUser');
var bodyParser=require('body-parser');
var expressSession=require('express-session');
var path = require('path');
var port=1234;
//COnfigure
app.set('view engine','ejs');

//Middlewire
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'My secret',resave: false,saveUninitialized: true}));
app.get('/',function(req,res){
	res.redirect('/login');
});
// Static
app.use(express.static(path.join(__dirname, './Asset')));



app.all('*',function(req,res,next){

	if(req.url=='/login' ||req.url=='/' ||req.url=='/reg' || req.url=='/checkUser/email' || req.url=='/checkUser/username')
	{
		next();
		return;
	}
	if(req.session.loggedUser==null)
	{
		res.redirect('./login');
	}
	else
	{
		next();
	}
});
//Route
app.use('/login',login);
app.use('/emp',emp);
app.use('/reg',reg);
app.use('/dashboard',dashboard);
app.use('/error',error);
app.use('/logout',logout);
app.use('/checkUser',checkUser);
//Server setup
app.listen(port,function(){
	console.log('Started port '+port);
});






