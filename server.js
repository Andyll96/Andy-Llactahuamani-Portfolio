const express = require('express'); // to create an express server
const connectDB = require('./config/db'); // allows us to connect to database

const app = express();

app.get('/', (req, res) => res.json({msg: 'Welcome to the andy-llactahuamani-portfolio API'}));

// Define Routes
app.use('/api/albums', require('./routes/albums'));
app.use('/api/album', require('./routes/album'));

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));