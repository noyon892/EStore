var db=require('./db');
var passwordHash = require.main.require('password-hash/lib/password-hash');

var loginData=function(data,callback)
{
	var sql='select * from admin where username=?';

	var param=[data.username];
	db.getData(sql,param,function(result){
		
		if(result.length==0 || result==null)
		{
			callback(false);
		}
		else
		{
			if(passwordHash.verify(data.password,result[0].password))
			{
				callback(result);	
			}
			else
				callback(false);
		}
	});
}

module.exports.loginData=loginData;