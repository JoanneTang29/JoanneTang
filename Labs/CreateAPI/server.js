// IMPORT DOTENV MODULE TO CONNECT YOUR OUR CONFIG FILE
const dotenv = require('dotenv');

// IMPORT MONGOOSE TO CONNECT TO DATABASE
const mongoose = require('mongoose');

// CONNECT TO OUR CONFIG.ENV FILE
dotenv.config({
  path: './config.env',
});

// TO SEE IF YOU ARE CONNECTED TO DOTENV
console.log(process.env);

// IMPORT OUR EXPRESS APPLICATION
const app = require('./app');

// CREATE A VARIABLE THAT REPRESENT OUR DATABASE
const DB = mongoose
  .connect(
    process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD),
    // if using mongoose@5 need these lines below. if using mongoose@6 you do not need.
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('database is up and running');
  })
  .catch((error) => {
    console.log('error', error.message);
  });

// CREATE A PORT TO LISTEN FOR REQUEST/RESPONSE CYCLE
const PORT = process.env.PORT;

// LISTEN FOR REQUEST/RESPONSE
app.listen(PORT, () => {
  console.log('Server started on port', process.env.PORT);
});
