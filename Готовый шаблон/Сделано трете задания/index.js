const puppeteer = require('puppeteer');





let scrape = async () => {
  // Здесь выполняются операции скрапинга...
  // В этой строке мы создаём экземпляр браузера и устанавливаем параметр headless в false. Это позволяет нам наблюдать за тем, что происходит.
      const browser = await puppeteer.launch({ headless: false });
      // Здесь создаём новую страницу в браузере.
      const page = await browser.newPage();
      
      // Переходим по адресу http://books.toscrape.com/.
      await page.goto('https://ru.tradingeconomics.com/currencies');
      await page.setViewport({width: 1280, height: 1080})
     
     // ПАРСИНГ КАТЕГОРИИ ВАЛЮТЫ
      await page.waitForTimeout(1000);
      const result = await page.evaluate(() => {
        // что-нибудь возвращаем
        

          let title = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(6) > div > table > tbody > tr");
          let title1 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(10) > div > table > tbody > tr");
          let title2 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(14) > div > table > tbody > tr");
          let title3 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(18) > div > table > tbody > tr");
          let title4 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(22) > div > table > tbody > tr");
          let title5 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(26) > div > table > tbody > tr");
          let mesTitle = [];
          let mesTitle1 = [];
          let mesTitle2 = [];
          let mesTitle3 = [];
          let mesTitle4 = [];
          let mesTitle5 = [];
          for(let elem of title){
            mesTitle.push(elem.innerText)
          }
          for(let elem of title1){
            mesTitle1.push(elem.innerText)
          }
          for(let elem of title2){
            mesTitle2.push(elem.innerText)
          }  
          for(let elem of title3){
            mesTitle3.push(elem.innerText)
          }           
          for(let elem of title4){
            mesTitle4.push(elem.innerText)
          }  
          for(let elem of title5){
            mesTitle5.push(elem.innerText)
          }                  

        return {
          currencies: {
            mesTitle,
            mesTitle1,
            mesTitle2,
            mesTitle3,
            mesTitle4,
            mesTitle5
          }
            
        }
    });



      // ПАРСИНГ КАТЕГОРИИ ТОВАРОВ
      await page.click('#pagemenutabs > li:nth-child(3) > a');
      await page.waitForTimeout(1000);
      const result1 = await page.evaluate(() => {
        // что-нибудь возвращаем
        

          let title = document.querySelectorAll("#aspnetForm > div.container > div > div > div > div > table > tbody > tr");
          let mesTitle = [];

          for(let elem of title){
            mesTitle.push(elem.innerText);
          }


          let Energy = [];
          for(let i = 0; i < 14; i++){
            Energy.push(mesTitle[i]);
          }

          let Metal = [];
          for(let i = 14; i < 23; i++){
            Metal.push(mesTitle[i])
          }

          let Agriculture = [];
          for(let i = 23; i < 45; i++){
            Agriculture.push(mesTitle[i]);
          }

          let Industry = [];
          for(let i = 45; i < 71; i++){
            Industry.push(mesTitle[i]);
          }
          
          let Livestock = [];
          for(let i = 71; i < 78; i++){
            Livestock.push(mesTitle[i]);
          }

          let Index = [];
          for(let i = 79; i < 86; i++){
            Index.push(mesTitle[i]);
          }
   

       
        return {
          products: {
            Energy,
            Metal,
            Agriculture,
            Industry,
            Livestock,
            Index
          }

        }
    });



    // ПАРСИНГ КАТЕГОРИИ ОБЛИГАЦИИ
    await page.click('#pagemenutabs > li:nth-child(4) > a');
    await page.waitForTimeout(1000);
    const result3 = await page.evaluate(() => {
      // что-нибудь возвращаем
      

        let title = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(6) > div > table > tbody > tr");
        let title1 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(10) > div > table > tbody > tr");
        let title2 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(14) > div > table > tbody > tr");
        let title3 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(18) > div > table > tbody > tr");
        let title4 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(22) > div > table > tbody > tr");
        let tiitle5 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(26) > div > table > tbody > tr")
        let mesTitle = [];
        let mesTitle1 = [];
        let mesTitle2 = [];
        let mesTitle3 = [];
        let mesTitle4 = [];
        let mesTitle5 = [];

        for(let elem of title){
          mesTitle.push(elem.innerText)
        }
        for(let elem of title1){
          mesTitle1.push(elem.innerText)
        }      
        for(let elem of title2){
          mesTitle2.push(elem.innerText)
        }    
        for(let elem of title3){
          mesTitle3.push(elem.innerText)
        }    
        for(let elem of title4){
          mesTitle4.push(elem.innerText)
        }   
        for(let elem of tiitle5){
          mesTitle5.push(elem.innerText)
        }                                             
 

     
      return {
        bonds: {
          mesTitle,
          mesTitle1,
          mesTitle2,
          mesTitle3,
          mesTitle4,
          mesTitle5
        }
      }
  });



  // ПАРСНИГ КАТЕГОРИЙ CRYPTO
  await page.click('#pagemenutabs > li:nth-child(5) > a');
  await page.waitForTimeout(1000);

  const result4 = await page.evaluate(() => {
    // что-нибудь возвращаем
    

      let title = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(6) > div > table > tbody > tr");
      let title1 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(10) > div > table > tbody > tr");
      let title2 = document.querySelectorAll("#aspnetForm > div.container > div > div > div:nth-child(14) > div > table > tbody > tr")
      let mesTitle = [];
      let mesTitle1 = [];
      let mesTitle2 = [];
      for(let elem of title){
        mesTitle.push(elem.innerText)
      }
      for(let elem of title1){
        mesTitle1.push(elem.innerText)
      }      
      for(let elem of title2){
        mesTitle2.push(elem.innerText)
      }        
    


   
      return {
        cryto: {
          mesTitle,
          mesTitle1,
          mesTitle2
        }
      }
  });

 
 





    browser.close();

    

     return [result, result1, result3, result4]

};

scrape().then((value) => {



  
  // Еслибе мы проверяли здесь спомощю console.log то нам бе показало пустые данные
  // console.log(value);
  // ПЕРВАЯ СТРАНИЦА

  
  // ЗДЕСЬ СОБИРАЕМ ВСЕ ТРИ ВКЛАДКИ СТРАНИЦ
  let allNeedPage = {};
  
  // СОРТИРОВКА ПЕРВОЙ СТРАНИЦЫ
  let keys = Object.keys(value[0].currencies);
  let mesLera = [];
  for(let i =0; i < keys.length; i++){
    let unicElement = [];
    for(let elem of value[0].currencies[keys[i]]){
      let mesValue = elem.split(`\t`);
     mesValue[1] = {currency: mesValue[1]}
     mesValue[2] = {price: mesValue[2]}
     mesValue[3] = {day: mesValue[3]}
     mesValue[4] = {percent: mesValue[4]}
     mesValue[5] = {everyweek: mesValue[5]}
     mesValue[6] = {everymonth: mesValue[6]}
     mesValue[7] = {yoy: mesValue[7]}
     mesValue[8] = {data: mesValue[8]}
     unicElement.push(mesValue)
    }
    mesLera.push(unicElement);
  }
  allNeedPage.currencies = mesLera;
  


  // СОРТИРОВКА ВТОРОЙ СТРАНИЦЫ
  let keys1 = Object.keys(value[1].products);
  let mesValue = [];
  for(let i =0; i < keys1.length; i++){
    let unicElement = [];
    for(let elem of value[1].products[keys1[i]]){
      let one = elem.split(`\t`);
      unicElement.push({...one});
    }
    mesValue.push(unicElement)
  }
  allNeedPage.products = mesValue;

  
  // ТРЕТЯ СТРАНИЦА
  let keys2 = Object.keys(value[2].bonds);
  let mesValue1 = [];
  for(let i =0; i < keys2.length; i++){
    let mesUnic = [];
    for(let elem of value[2].bonds[keys2[i]]){
      let mesValue = elem.split(`\t`);

     mesValue[1] = {currency: mesValue[1]}
     mesValue[2] = {price: mesValue[2]}
     mesValue[3] = {day: mesValue[3]}
     mesValue[4] = {everyweek: mesValue[4]}
     mesValue[5] = {everymonth: mesValue[5]}
     mesValue[6] = {yoy: mesValue[6]}
     mesValue[7] = {data: mesValue[7]}
     mesUnic.push(mesValue);
    }
    mesValue1.push(mesUnic);
  }  
  allNeedPage.bonds = mesValue1;

  

  // ЧЕТВЕРТАЯ СТРАНИЦА

  let keys3 = Object.keys(value[3].cryto);
  let mesValue2 = [];
  for(let i =0; i < keys3.length; i++){
    let mesUnic = [];
    
    for(let elem of value[3].cryto[keys3[i]]){
      let mesValue = elem.split(`\t`);
      mesValue[0] = {crypto: mesValue[0]}
      mesValue[1] = {price: mesValue[1]}
      mesValue[2] = {day: mesValue[2]}
      mesValue[3] = {procent: mesValue[3]}
      mesValue[4] = {everyweek: mesValue[4]}
      mesValue[5] = {everymonth: mesValue[5]}
      mesValue[6] = {yoy: mesValue[6]}
      mesValue[7] = {marketCap: mesValue[7]}
      mesValue[8] = {data: mesValue[8]}
      mesUnic.push(mesValue);
    }
    mesValue2.push(mesUnic)
    
  }
  allNeedPage.crypto = mesValue2;


  console.log(allNeedPage)
  


});