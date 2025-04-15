const mongoose = require("mongoose");

async function connectDB(){
    // define the database URL
    let databaseUrl = process.env.DATABASE_URL || `mongodb://mongo:27017/${process.env.npm_package_name}`;
    try {
        // connect to the database
        mongoose.connect(databaseUrl)
        // acknowledgement message
        console.log("Connected to the Database!");
    }
    // IF error, acknowledgement message
    catch (error){
        console.error("Error connecting to Mongo DB: ", error); // highlight error in red if use console.error instead of console.log
        process.exit(1); // Why (1) and not just process.exit()? - process.exit() by itself = process.exit(0) = Success. 
    }
}

module.exports = { connectDB };