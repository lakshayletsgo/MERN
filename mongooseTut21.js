// MongoDb installation
// This is just a readable code and not a runnable code
// First you have to download the mongodb shell and then you have to download its server 
// After installation of both set the environment variables of both the mongodb and mongo
// After then you can access them through cmd 
// First you have to write mongod and then in another cmd write mongosh 
// After writting mongosh you can access mongodb server
// To create a database first you have to use the database 
// use inventory('//Name of the database') 
// Then db.createCollection('inventory')
// To insert a single data use db.inventory.insertOne({})
// To insert many data use the command db.inventory.insertMany({})
// To view the data use the command db.inventory.find({});

// This will give all the object having status D
// To find a particular data use db.(name of the folder).find({status: "D"})


// This will give data having status A and D
// db.inventory.find( { status: { $in: [ "A", "D" ] } } )


//This will give data having status A and quantity less than 30 
// db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// This will give data having status A or quantity less than 30
// db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )


// $lt => is less than
// $lte => is less than or equal 
// $gt => is greater than
// $gte =>  is greater than or equal
// $in => in the array 
// $eq => is equal 
// $ne => not equal
// $nin => not in the array 


// To update any data use the function
// db.inventory.updateOne({condition},{$set:{what to update}})
// db.inventory.updateOne({item:"postcard"},{$set:{qty:"34"}})
// db.inventory.updateMany({item:"postcard"},{$set:{qty:"34"}})


// To delete any data use the function
// db.inventory.deleteOne({what to delete})
// db.inventory.deleteOne( { status: "D" } )
// db.inventory.deleteMany({ status : "A" })