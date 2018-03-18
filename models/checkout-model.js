var db=require('./db');

module.exports={
	placeorder: function(data,callback) {
		var sql='INSERT INTO `soldproduct`(`productid`,`productname`, `userid`,`username`, `quantity`, `price`,`phonenumber`, `address`, `zipcode`) VALUES (?,?,?,?,?,?,?,?,?)';
		var param=[data.productid,data.productname,data.userid,data.username,data.quantity,data.price,data.phonenumber,data.address,data.zipcode];
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