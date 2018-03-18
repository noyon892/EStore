//Diclaration
var express=require('express');
var app=express();
var index=require('./controllers/index');
var cart=require('./controllers/cart');
var login=require('./controllers/login');
var user=require('./controllers/user');
var reg=require('./controllers/reg');
var adminlogin=require('./controllers/adminlogin');
var admindashboard=require('./controllers/admindashboard');
var error=require('./controllers/error');
var logout=require('./controllers/logout');
var user = require('./controllers/user');
var checkUser=require('./controllers/checkUser');
var checkout=require('./controllers/checkout');
var bodyParser=require('body-parser');
var expressSession=require('express-session');
var alertnode=require('alert-node');
var path = require('path');
var port=1234;
//COnfigure
app.set('view engine','ejs');

//Middlewire
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret: 'My secret',resave: false,saveUninitialized: true}));
app.get('/',function(req,res){
	res.redirect('/index');
});
// Static
app.use(express.static(path.join(__dirname, './Asset')));



app.all('*/*',function(req,res,next){
	if(req.url=='/index' ||req.url=='/login' ||req.url=='/adminlogin' ||req.url=='/' ||req.url=='/reg' || req.url=='/checkUser/email' || req.url=='/checkUser/username' || req.url=='/checkUser/adminemail' || req.url=='/checkUser/adminusername' || req.url=='index/productdetails/*' || req.url=='/cart' || req.url=='/cart/addtocart/*' || req.url=='/cart/removecart/*' || req.url=='/index/search')

	{
		next();
		return;
	}
	if(req.session.loggedUser==null)
	{
		res.redirect('/index');
	}
	else
	{
		next();
	}
});
//Route
app.use('/index',index);
app.use('/cart',cart);
app.use('/login',login);
app.use('/user',user);
app.use('/reg',reg);
app.use('/adminlogin',adminlogin);
app.use('/admindashboard',admindashboard);
app.use('/error',error);
app.use('/logout',logout);
app.use('/checkUser',checkUser);
app.use('/checkout',checkout);
app.use('/user',user);
//Server setup
app.listen(port,function(){
	console.log('Started port '+port);
});