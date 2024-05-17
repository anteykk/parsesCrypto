let {Router} = require(`express`);
let quotes = require(`../models/quotes`)

let router = Router();

router.get(`/`, async(req,res)=>{
  let quo = await quotes.findOne({});
  console.log(`ПРИШЕЛ ЗАПРОС НА КВОТЫ`)
  res.send(JSON.stringify(quo));
})

module.exports = router;