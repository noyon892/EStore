var db=require('./db');

module.exports={
	placeorder: function(data,callback) {
		var sql='INSERT INTO `soldproduct`(`productid`, `userid`, `quantity`, `price`, `address`, `zipcode`) VALUES (?,?,?,?,?,?)';
		var param=[data.productid,data.userid,data.quantity,data.price,data.address,data.zipcode];
			db.insertData(sql,param,function(result){
			if(result==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(true);	
			}
		});
	}
};