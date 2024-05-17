let {Router} = require(`express`);

let router = Router();

router.get(`/`, async (req,res)=>{
  console.log(`ПЕРЕХОД НА ГЛАВНУЮ СТРАНИЦУ`);
  res.sendFile(`../public/index.html`);
})

module.exports = router;