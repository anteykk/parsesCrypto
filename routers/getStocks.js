let {Router} = require(`express`);
let Stocks = require(`../models/stock`);

let router = Router();

router.get(`/`, async(req,res)=>{
  let stock = await Stocks.findOne({});
  res.send(JSON.stringify(stock));
})

module.exports = router;