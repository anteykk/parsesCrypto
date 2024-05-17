let mongoose = require(`mongoose`);

let Schema = mongoose.Schema;


let economicIndicators = new Schema({
  information: [
    {
      Estimatedcalendar: {
        type: Object,
        required: true
      },
      EuroArea: {
        type: Object,
        required: true
      },
      China: {
        type: Object,
        required: true
      },
      Japan: {
        type: Object,
        required: true
      },
      Germany: {
        type: Object,
        required: true
      },
      GreatBritain: {
        type: Object,
        required: true
      },
      France: {
        type: Object,
        required: true
      },
      India: {
        type: Object,
        required: true
      },
      Italy: {
        type: Object,
        required: true
      },
      Brazil: {
        type: Object,
        required: true
      },       
      Canada: {
        type: Object,
        required: true
      },  
      SouthKorea: {
        type: Object,
        required: true
      },  
      Russia: {
        type: Object,
        required: true
      },  
      Spain: {
        type: Object,
        required: true
      },  
      Australia: {
        type: Object,
        required: true
      },  
      Mexico: {
        type: Object,
        required: true
      },  
      Indonesia: {
        type: Object,
        required: true
      },  
      Turkey: {
        type: Object,
        required: true
      },       
      Netherlands: {
        type: Object,
        required: true
      }, 
      Switzerland: {
        type: Object,
        required: true
      }, 
      SaudiArabia: {
        type: Object,
        required: true
      }, 
      Argentina: {
        type: Object,
        required: true
      }, 
      SouthAfrica: {
        type: Object,
        required: true
      },   
      Singapore: {
        type: Object,
        required: true
      },                                                                                                                             
    }
  ]   
,
  timeCheck: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(`economicIndicators`, economicIndicators);