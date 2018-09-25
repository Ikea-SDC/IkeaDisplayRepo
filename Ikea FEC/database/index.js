const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/IkeaDB');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting'));
db.once('open', ()=>{
  console.log('connected to IkeaDB!');
});

let data = new mongoose.Schema({
  type: String,
  productLine: String,
  title: String,
  articleNumber: String,
  price: String,
  starRating: Number,
  reviewCount: Number,
  description: String,
  availability:Boolean,
  imageUrl: String,
  additionalUrl: [{Url: String}],
})

let displayData = mongoose.model('displayData', data);

module.exports.displayData = displayData;