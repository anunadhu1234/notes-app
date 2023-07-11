const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://anunadhu1234:aajohncena1234@anurag.6utcbbg.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;