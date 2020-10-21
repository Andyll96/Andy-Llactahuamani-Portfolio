const mongoose = require('mongoose'); // Used to connect to the Database 
const config = require('config'); // To get access to global variable
const db = config.get('mongoURI'); // gets the mongoURI from config file

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            // needed to avoid some warnings
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB Connected...')
    } catch (error) {
        console.log('ERROR' + error.message);
        process.exit(1);
    }
}


module.exports = connectDB;