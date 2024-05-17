let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;


let Quotes = new Schema({
  matket: [
    {
      currencies: {
        type: Object,
        required: true
      },
      products: {
        type: Object,
        required: true
      },
      bonds: {
        type: Object,
        required: true
      },
      crypto: {
        type: Object,
        required: true
      }
    }
  ],
  time: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(`Quotes`, Quotes);