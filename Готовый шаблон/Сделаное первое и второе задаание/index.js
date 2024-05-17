const puppeteer = require('puppeteer');
let needCountry = `Великобритания`

let scrape = async () => {

 


  // Здесь выполняются операции скрапинга...
  // В этой строке мы создаём экземпляр браузера и устанавливаем параметр headless в false. Это позволяет нам наблюдать за тем, что происходит.
  
      const browser = await puppeteer.launch({ headless: false });
     
      // Здесь создаём новую страницу в браузере.
      const page = await browser.newPage();
  
      // Переходим по адресу http://books.toscrape.com/.
      await page.goto('https://ru.tradingeconomics.com/indicators');
      await page.setViewport({width: 1280, height: 1080})
      await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(2) > a');
      await page.waitForTimeout(100);
      const result = await page.evaluate(() => {
        // что-нибудь возвращаем
          let title = document.querySelectorAll(".datatable-row");
          let title2 = document.querySelectorAll(".datatable-row-alternating");
          let mesTitle = [];
          for(let elem of title){
            mesTitle.push(elem.innerText + ` |`)
          }
          for(let elem of title2){
            mesTitle.push(elem.innerText + ` |`)
          }
        return {
            mesTitle
        }
    });
    
   

    await page.goto('https://ru.tradingeconomics.com/indicators');
    await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(3) > a');
    await page.waitForTimeout(100);
    let test = await page.evaluate(() => {
      // что-нибудь возвращаем
        let title = document.querySelectorAll(".datatable-row");
        let title2 = document.querySelectorAll(".datatable-row-alternating");
        let mesTitle = [];
        for(let elem of title){
          mesTitle.push(elem.innerText + ` |`)
        }
        for(let elem of title2){
          mesTitle.push(elem.innerText + ` |`)
        }
      return {
          mesTitle
      }
   });

   await page.goto('https://ru.tradingeconomics.com/indicators');
   await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(4) > a');
   await page.waitForTimeout(100);
   let burger = await page.evaluate(() => {
     // что-нибудь возвращаем
       let title = document.querySelectorAll(".datatable-row");
       let title2 = document.querySelectorAll(".datatable-row-alternating");
       let mesTitle = [];
       for(let elem of title){
         mesTitle.push(elem.innerText + ` |`)
       }
       for(let elem of title2){
         mesTitle.push(elem.innerText + ` |`)
       }
     return {
         mesTitle
     }
  });


  await page.goto('https://ru.tradingeconomics.com/indicators');
  await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(5) > a');
  await page.waitForTimeout(100);
  let diamond = await page.evaluate(() => {
    // что-нибудь возвращаем
      let title = document.querySelectorAll(".datatable-row");
      let title2 = document.querySelectorAll(".datatable-row-alternating");
      let mesTitle = [];
      for(let elem of title){
        mesTitle.push(elem.innerText + ` |`)
      }
      for(let elem of title2){
        mesTitle.push(elem.innerText + ` |`)
      }
    return {
        mesTitle
    }
 });


 await page.goto('https://ru.tradingeconomics.com/indicators');
 await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(6) > a');
 await page.waitForTimeout(100);
 let gold = await page.evaluate(() => {
   // что-нибудь возвращаем
     let title = document.querySelectorAll(".datatable-row");
     let title2 = document.querySelectorAll(".datatable-row-alternating");
     let mesTitle = [];
     for(let elem of title){
       mesTitle.push(elem.innerText + ` |`)
     }
     for(let elem of title2){
       mesTitle.push(elem.innerText + ` |`)
     }
   return {
       mesTitle
   }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(7) > a');
await page.waitForTimeout(100);
let iron = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(8) > a');
await page.waitForTimeout(100);
let checkBalanceVvp = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});




   
await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl02_Repeater2_ctl12_HyperLink2');
await page.waitForTimeout(100);
let population = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl02_Repeater2_ctl18_HyperLink2');
await page.waitForTimeout(100);
let WageGrowth = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl00_HyperLink2');
await page.waitForTimeout(100);
let ConsumerPriceIndexCPI = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl02_HyperLink2');
await page.waitForTimeout(100);
let CoreInflationRate = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl11_HyperLink2');
await page.waitForTimeout(100);
let ProducerPriceIndex = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl02_HyperLink2');
await page.waitForTimeout(100);
let CrudeOilProduction = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl08_HyperLink2');
await page.waitForTimeout(100);
let GoldReserve = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl00_HyperLink2');
await page.waitForTimeout(100);
let TradeBalance = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl06_HyperLink2');
await page.waitForTimeout(100);
let ExternalDebt = await page.evaluate(() => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});




await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl09_HyperLink2');
await page.waitForTimeout(100);
let CompositeIndexOfBusinessactivityPMI = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl22_HyperLink2');
await page.waitForTimeout(100);
let ManufacturingPMI = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl26_HyperLink2');
await page.waitForTimeout(100);
let ServicesPMI = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});




await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl05_HyperLink2');
await page.waitForTimeout(100);
let GasolinePrices = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl11_HyperLink2');
await page.waitForTimeout(100);
let RetailSales = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl12_HyperLink2');
await page.waitForTimeout(100);
let RetailSalesYoY = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl11_Repeater2_ctl00_HyperLink2');
await page.waitForTimeout(100);
let CorporateTaxRate = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});

await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl11_Repeater2_ctl01_HyperLink2');
await page.waitForTimeout(100);
let incomeTaxRate = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});




   
// УНИКАЛЬНАЯ СОРТИРОВКА СТРАНИЦЫ
await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(9) > a');
await page.waitForTimeout(1000);
let creditRating = await page.evaluate((needCountry) => {
  // что-нибудь возвращаем
    let title = document.querySelectorAll("tr");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText)
    }

    let succesUnic = []
    for(let elem of mesTitle){
      let oro = elem;
      let bem = oro.replace(/\n\t|\tt|\t/g, `@`);
      let hana = bem.split(`@`);
      let objHana = {
    
      }
      
        objHana.country = hana[0];
        objHana.SP = hana[1];
        objHana.Moodys = hana[2];
        objHana.Fitch = hana[3];
        objHana.DBRS = hana[4];
        objHana.TE = hana[5];

          if(objHana.country == needCountry){
            succesUnic.push(objHana);  
          }
          
        
        
    }
    

    return {
      succesUnic,
      unic: true
    }
  

  
}, needCountry);



await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl08_Repeater2_ctl00_HyperLink2');
await page.waitForTimeout(100);
let NumberOfBuildingPermitsIssued = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});


await page.goto('https://ru.tradingeconomics.com/indicators');
await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl30_HyperLink2');
await page.waitForTimeout(100);
let ZEWEconomicSentimentIndex = await page.evaluate(() => { 
  // что-нибудь возвращаем
    let title = document.querySelectorAll(".datatable-row");
    let title2 = document.querySelectorAll(".datatable-row-alternating");
    let mesTitle = [];
    for(let elem of title){
      mesTitle.push(elem.innerText + ` |`)
    }
    for(let elem of title2){
      mesTitle.push(elem.innerText + ` |`)
    }
  return {
      mesTitle
  }
});





      
      // Код для скрапинга
      browser.close();
      //return result;

      return [
        result, 
        test, 
        burger,
        diamond,
        gold,
        iron,
        checkBalanceVvp,
        population,
        WageGrowth,
        ConsumerPriceIndexCPI,
        CoreInflationRate,
        ProducerPriceIndex,
        CrudeOilProduction,
        GoldReserve,
        TradeBalance,
        ExternalDebt,
        CompositeIndexOfBusinessactivityPMI,
        ManufacturingPMI,
        ServicesPMI,
        GasolinePrices,
        RetailSales,
        RetailSalesYoY,
        CorporateTaxRate,
        incomeTaxRate,
        creditRating,
        NumberOfBuildingPermitsIssued,
        ZEWEconomicSentimentIndex
      ]
    
};

scrape().then((value) => {

 
  // Количество ключей в этом обекте должно быть равно количеству обектов в value
  let succes = {
    
    temp:{},
    proc:{},
    infilans:{},
    dontjob:{},
    vvp:{},
    tradeBalance:{},
    checkBalanceVvp: {},
    population: {},
    WageGrowth: {},
    ConsumerPriceIndexCPI: {},
    CoreInflationRate: {},
    ProducerPriceIndex: {},
    CrudeOilProduction: {},
    GoldReserve: {},
    TradeBalance: {},
    ExternalDebt: {},
    CompositeIndexOfBusinessactivityPMI: {},
    ManufacturingPMI: {},
    ServicesPMI: {},
    GasolinePrices: {},
    RetailSales: {},
    RetailSalesYoY: {},
    CorporateTaxRate: {},
    incomeTaxRate: {},
    creditRating: {},
    NumberOfBuildingPermitsIssued: {},
    ZEWEconomicSentimentIndex: {}
  };


  let keys = Object.keys(succes);

 
  for (var b = 0; b < keys.length; b++) {
  //    console.log(keys[i] + ' is ' + succes[keys[i]]);
  // value.length
  // succes[keys[0]]
    
  // Проверка на то - нужна ли фильтрация для елементов ? или нет
  if(!value[b].unic){
    for(let elem of value[b].mesTitle){
      
      let Counters = elem.split(` |`);
  
      for(let i = 0; i < Counters.length; i++){
        let double = Counters[i].split(`\t`);
        
        for(let ken of double){
          if(ken == needCountry){
            succes[keys[b]].country = double[0];
            succes[keys[b]].last = double[1];
            succes[keys[b]].first = double[2];
            succes[keys[b]].link = double[3];
            succes[keys[b]].block = double[4];
          }
        }
      }
    }  
  } else {
    succes[keys[b]] = value[b].succesUnic[0]
  }
 

  }
  
 console.log(succes);
 
  

 
  

  
   
});
