let mongoose = require(`mongoose`);

let Stock = mongoose.Schema({
  stocks: {
    type: Object,
    required: true
  },
  parseTime: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(`Stocnk`, Stock);