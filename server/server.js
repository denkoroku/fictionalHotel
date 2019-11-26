const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bookings');
    const guestsCollection = db.collection('guests');
    const guestsRouter = createRouter(guestsCollection);
    app.use('/api/guests', guestsRouter);
  })
  .catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
