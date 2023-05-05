// Indexes in Mongodb
// It is used so that the finding speed increases
// It is default created for the object id 
// We can change it 

// db.orders.getIndexes()
// It will give the current indexes of the database

//   db.orders.createIndex({"email":1})
//It will create an index for the email 



// Data Model and Schema Validation
// db.createCollection("student",{ validator:{ $jsonSchema:{ bsonType:"object", required:["name","age","address"], properties:{ name:{ bsonType:"string", description:"must be a string and is required"}, age:{ bsonType:"int", minimum:18, maximum:20, description:"must be larger than 18 and less than 20 and is required"}, address:{ bsonType:"string", description:"must be string"} } } } })
// This is used to provide what type of data we want 
// Here we first create a collection name student and then we define validator where we have given jsonSchema in which we first define the type of the validator here it is object
// Then we tell what data we want what are required then we just define their properties 
// And to store the data we can write it like this 
// db.insertOne( {  name:"lakshay goel",
// ... "age":NumberInt(19),
// ... "address":"49A, Virat Nagar, Model Town"
// ... })