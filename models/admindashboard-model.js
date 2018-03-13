var db=require('./db');

module.exports={
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
	},
	productdelete: function(data,callback){
		var sql="DELETE FROM `product` WHERE id = ?";
		var param=[data.id];

		db.deleteData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},
	adminInsert: function(data,callback)
	{
		var sql="INSERT INTO `admin`(`name`, `username`, `email`, `password`, `gender`, `dob`, `nid`, `presentaddress`, `parmanentaddress`) VALUES (?,?,?,?,?,?,?,?,?)";
		var param=[data.name,data.username,data.email,data.password,data.gender,data.dob,data.nid,data.presentaddress,data.parmanentaddress];

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
	},
	productlist: function(callback)
	{
		var sql='SELECT * FROM product';

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

	productdetils:function(data,callback) {
		var sql='select * from product where id=?';
		var param=[data.id];
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
	},
	userlist: function(callback)
	{
		var sql='SELECT id,name,email FROM user';

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