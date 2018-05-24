var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;

db.once('open', () => {
  console.log(`Logged into MongoDB ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});