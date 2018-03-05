var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'estore'
});

module.exports={
	insertData: function(sql,param,callback){

		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					console.log(result);
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					console.log(result);
					callback(result);
				}
			});
		}

	},
	getAllData: function(sql,callback){
		connection.query(sql,function(error,result){
			if(error)
			{
				callback(null);
			}
			else
			{
				callback(result);
			}
		});
	},
	getData : function(sql,param,callback){

		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					console.log(result);
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					console.log(result);
					callback(result);
				}
			});
		}

	}
};
