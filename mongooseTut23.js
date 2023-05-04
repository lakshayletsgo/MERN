// Projection and Lookup in Mongo

// Projection is used to find a particular type of data 

// In this we have to put the value we want as 1 
// If we have to put value that we don't want then we only use 0 
// We can't use 1 and 0 same time 
//We can use 0 and 1 only in the case of id 
// db.orders.aggregate([{$project:{"name":1,"size":1,"price":1}}])

// db.orders.aggregate([{$project:{"_id":0,"name":1,"size":1,"price":1}}])


// We can perform same function using find 
// db.orders.find({},{"_id":0,"name":1})
// This will give only name of the orders 



// Lookup
//  db.inventory.aggregate([{$match:{"item":'paper'}},{$lookup:{from:"orders",localField:"item",foreignField:"name",as:"_order_summary"}}])

// This will match fields we have entered and print them
// Here we have put the local(inventory)  first it will match the first condition i.e item=>paper
// Then it will lookup for the order table and then make it a foreign then we put the localField and foreignField and then we have to name the total output 