var db=require('./db');

module.exports={
	productlist: function(callback)
	{
		var sql='select * from product';

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
	},
	productInsert: function(data,callback){
		var sql="INSERT INTO `product`(`productname`, `price`, `quantity`, `catagory`, `image1`, `image2`, `image3`, `details`) VALUES (?,?,?,?,?,?,?,?)";
		var param=[data.productname,data.price,data.quantity,data.catagory,data.image1,data.image2,data.image3,data.details];

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
};