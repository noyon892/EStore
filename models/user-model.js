var db=require('./db');

var user=function(data,callback)
{
	var sql='select * from user where username=?';

	var param=[data.username];
	db.getData(sql,param,function(result){
		if(result.length==0 || result==null)
		{
			callback(false);
		}
		else
		{
			callback(result);
		}
	});
}

module.exports.user=user;