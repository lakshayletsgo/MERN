// Aggregation in Mongo
// First use inventory
// Second insert

// This will add all the matched values and print the sum of the price
// First it will check if the value of the quantity is 10 if it is then it will assign the value 10 to the variable(_id) then it will add all the prices and then print them using sum
db.orders.aggregate([
    { $match: { 'quantity': 10 } },
     { $group: { '_id': '$quantity', total: { $sum: '$price' } } }])





// This will give the different types of the values present in the database 
db.orders.distinct('price')
//This will give all the distinct values of price present

