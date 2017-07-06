var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoBasics');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connection successful');
});

// kittySchema.methods.speak = () => {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }
//
// var kittySchema = mongoose.Schema({
//   name: String
// });
//
// var Kitten = mongoose.model('Kitten', kittySchema);
//
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
