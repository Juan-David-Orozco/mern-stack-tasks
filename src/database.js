const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/mern_stack_tasks';

mongoose.connect(URI)
  .then(db => console.log('Db is connected',mongoose.connection.db.databaseName))
  .catch(error => console.error(error));

//module.exports = mongoose;
