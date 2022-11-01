const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


MongoClient.connect('mongodb://0.0.0.0:27017')
.then((client) => {
  const db = client.db('dataSource');

  const firstNameCreator = db.collection('test');
  const firstNameRouter = createRouter(firstNameCreator);
  app.use('/api/test', firstNameRouter);



  
})
.catch(console.err);

app.listen(5002, function () {
  console.log(`Listening on port ${ this.address().port }`);
});