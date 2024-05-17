let {Router} = require(`express`);
let economicIndicators = require(`../models/economicIndicators`);

let router = Router();

router.get(`/`, async(req,res)=>{
  let evo = await economicIndicators.findOne({})
  console.log(`ПРИШЕЛ ЗАПРОС НА МИКРОЕКОНОМИКУ`)
  res.send(JSON.stringify(evo));
})

module.exports = router;