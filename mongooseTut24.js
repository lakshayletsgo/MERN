// sort, skip and limit record

// sort
//  db.inventory.find({}).sort({"qty":1})
// This will arrange the data in ascending order of qty property
// It is simple it just take the property for sorting and then 1 or -1(For descending order)


// skip
// db.orders.find().skip(3)
//This will skip the first 3 iteration and print the rest 
//Note that it will just skip the first objects

// db.orders.find().sort({"name":1}).skip(3) 
// It will first make it ascending according to the values of name and then skip the first 3 iterations


// limit
// It tells how many values to print
// db.orders.find().limit(4)
// This will print the first 4 values 

// db.orders.find().sort({"price":1}).limit(4)
// This will first iterate the values ascending according to price and then just print the first 4 values


