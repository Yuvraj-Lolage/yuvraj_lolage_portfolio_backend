const mongoose = require('mongoose');

const handleDBConnection = async () => {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/portfolio', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increased timeout to 30 seconds
      });
      console.log(`connection object  = ${ connection }`);
      return connection ? true : false;
    // return connection;
}

module.exports = { handleDBConnection };