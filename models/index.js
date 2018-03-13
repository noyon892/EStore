var db=require('./db');

module.exports={
	productdetails: function(callback)
	{
		var sql='select * from emp';

		db.getAllData(sql,function(result){
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
};