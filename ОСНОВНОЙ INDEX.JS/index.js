let express = require(`express`);
let mongoose = require(`mongoose`);
let keys = require(`./keys/keys`);
let economicIndicators = require(`./test`);
let quotes = require(`./quotes`);
let getQuotes = require(`./routers/getQuotes`)
let microEconomic = require(`./routers/microEconomic`);
let cors = require('cors')



setInterval(() => {
  quotes.send();  
}, 15000);





/*
economicIndicators.read();
setInterval(() => {
  economicIndicators.read();
}, 86400000);
*/






let app = express();
app.use(express.static(`public`))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())


// Запрос данных котировки
app.use(`/getQuotes`, getQuotes);
// Запрос данных микроекономики
app.use(`/microEconomic`, microEconomic);

let PORT = process.env.PORT || 3002;

let startServer = async()=>{
  await mongoose.connect(keys.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
    console.log(`База данных успешно подключена`);
  })
  app.listen(PORT, ()=>{
    console.log(`Express сервер запущен`);
  })
}

startServer();

