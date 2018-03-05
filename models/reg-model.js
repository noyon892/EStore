var db=require('./db');
var validateUser=function(data,callback){
var sql="INSERT INTO `user`(`name`, `username`, `email`, `phone`, `password`, `address`) VALUES (?,?,?,?,?,?)";

var param=[data.name,data.username,data.email,data.phone,data.password,data.address];
db.insertData(sql,param,function(result){
	if(result==null || result.length==0)
	{
		callback(false);
	}
	else
	{
		callback(true);
	}
});
}

module.exports.validateUser=validateUser;