require('colors');
const { connect } = require('mongoose');

const app = require('./app');

const { MONGO_DB, PORT } = process.env;

connect(MONGO_DB)
  .then(() => {
    console.log(`MongoDB is connected`.cyan.bold.italic);
    app.listen(PORT, () => {
      console.log(
        `Server running. Use our API on port: ${PORT}`.cyan.bold.italic
      );
    });
  })
  .catch(error => {
    console.log(error.message.red.bold);
    process.exit(1);
  });
