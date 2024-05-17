
module.exports = {
  read(){

    let mesCountry = [
      `Соединенные Штаты`,
      `Зона евро`,
      `Китай`,
      `Япония`,
      `Германия`,
      `Великобритания`,
      `Франция`,
      `Индия`,
      `Италия`,
      `Бразилия`,
      `Канада`,
      `Южная Корея`,
      `Россия`,
      `Испания`,
      `Австралия`,
      `Мексика`,
      `Индонезия`,
      `Турция`,
      `Нидерланды`,
      `Швейцария`,
      `Саудовская Аравия`,
      `Аргентина`,
      `ЮАР`,
      `Сингапур`
    ]

    // Массив стран из парсинга
    let mesFillCountry = [];

    const puppeteer = require('puppeteer');
    let economicIndicators = require(`./models/economicIndicators`);
    let Time = require(`./public/time`);


    function veryTest(arg){

      let needCountry = mesCountry[arg];
      console.log(needCountry)



      let scrape = async () => {
    
     
    
    
        // Здесь выполняются операции скрапинга....
        // В этой строке мы создаём экземпляр браузера и устанавливаем параметр headless в false. Это позволяет нам наблюдать за тем, что происходит.
        
            const browser = await puppeteer.launch({
                //  headless: false
           
                'args' : [
                  '--no-sandbox',
                  '--disable-setuid-sandbox'
                ]
               });
           
            // Здесь создаём новую страницу в браузере.
            const page = await browser.newPage();
        
            // Переходим по адресу http://books.toscrape.com/.

            let result;
            let country1 = async()=>{
              try{
                  await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
                  await page.waitForTimeout(2000);
                  await page.setViewport({width: 1280, height: 1080})
                  await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(2) > a');
                  await page.waitForTimeout(2000);
                  const result1 = await page.evaluate(() => {
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
                result = result1;

              }catch(e){
                console.log(e);
                await country1();
              }
            }
            await country1()



          let test;
          let country2 = async()=>{
            try {
              await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
              await page.waitForTimeout(2000);
              await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(3) > a');
              await page.waitForTimeout(2000);
              let test1 = await page.evaluate(() => {
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
             test = test1;
            } catch (error) {
              console.log(error);
              await country2();
            }
          }
          await country2();

/*
          let countr = async()=>{
            try {
              
            } catch (error) {
              console.log(error);
            }
          }
          await countr();
*/ 

      let burger;
      let countr3 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(4) > a');
          await page.waitForTimeout(2000);
          let burger1 = await page.evaluate(() => {
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
         burger = burger1;
        } catch (error) {
          console.log(error);
          await countr3()
        }
      }
      await countr3();


       
      
      let diamond;
      let countr4 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(5) > a');
          await page.waitForTimeout(2000);
          let diamond1 = await page.evaluate(() => {
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
         diamond = diamond1;
        } catch (error) {
          console.log(error);
          await countr4();
        }
      }
      await countr4();
      

      
      
      let gold;
      let countr5 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(6) > a');
          await page.waitForTimeout(2000);
          let gold1 = await page.evaluate(() => {
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
          gold = gold1;
        } catch (error) {
          console.log(error);
          await countr5();
        }
      }
      await countr5();


     
      let iron;
      let countr6 = async()=>{
        try {
       
            await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
            await page.waitForTimeout(2000);
            await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(7) > a');
            await page.waitForTimeout(2000);
            let iron1 = await page.evaluate(() => {
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
            iron = iron1; 
          

        } catch (error) {
          console.log(error);
          await countr6();
        }
      }
      await countr6();



      let checkBalanceVvp;
      let countr7 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(1000);
          await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(8) > a');
          await page.waitForTimeout(2000);
          let checkBalanceVvp1 = await page.evaluate(() => {
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
          checkBalanceVvp = checkBalanceVvp1;
        } catch (error) {
          console.log(error);
          await countr7();
        }
      }
      await countr7();
      
      

      
      
      let population;
      let countr8 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl02_Repeater2_ctl12_HyperLink2');
          await page.waitForTimeout(2000);
          let population1 = await page.evaluate(() => {
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
          population = population1;
        } catch (error) {
          console.log(error);
          await countr8();
        }
      }
      await countr8();
         

      let WageGrowth;
      let countr9 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl02_Repeater2_ctl18_HyperLink2');
          await page.waitForTimeout(2000);
          let WageGrowth1 = await page.evaluate(() => {
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
          WageGrowth = WageGrowth1;
        } catch (error) {
          console.log(error);
          await countr9();
        }
      }
      await countr9();    



      let ConsumerPriceIndexCPI;
      let countr33 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl00_HyperLink2');
          await page.waitForTimeout(2000);
          let ConsumerPriceIndexCPI1 = await page.evaluate(() => {
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
          ConsumerPriceIndexCPI = ConsumerPriceIndexCPI1;
        } catch (error) {
          console.log(error);
          await countr33();
        }
      }
      await countr33();




      
      let CoreInflationRate;
      let countr10 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl02_HyperLink2');
          await page.waitForTimeout(2000);
          let CoreInflationRate1 = await page.evaluate(() => {
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
          CoreInflationRate = CoreInflationRate1;
        } catch (error) {
          console.log(error);
          await countr10();
        }
      }
      await countr10();


      
      let ProducerPriceIndex;
      let countr11 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl04_Repeater2_ctl11_HyperLink2');
          await page.waitForTimeout(2000);
          let ProducerPriceIndex1 = await page.evaluate(() => {
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
          ProducerPriceIndex = ProducerPriceIndex1;
        } catch (error) {
          console.log(error);
          await countr11();
        }
      }
      await countr11();

      
      let CrudeOilProduction;
      let countr12 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl02_HyperLink2');
          await page.waitForTimeout(2000);
          let CrudeOilProduction1 = await page.evaluate(() => {
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
          CrudeOilProduction = CrudeOilProduction1;
        } catch (error) {
          console.log(error);
          await countr12();
        }
      }
      await countr12();
      
/*
          let countr = async()=>{
            try {
              
            } catch (error) {
              console.log(error);
            }
          }
          await countr();
*/ 


      let GoldReserve;
      let countr13 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl08_HyperLink2');
          await page.waitForTimeout(100);
          let GoldReserve1 = await page.evaluate(() => {
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
          GoldReserve = GoldReserve1;
        } catch (error) {
          console.log(error);
          await countr13();
        }
      }
      await countr13();
      


      let TradeBalance;
      let countr14 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl00_HyperLink2');
          await page.waitForTimeout(100);
          let TradeBalance1 = await page.evaluate(() => {
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
          TradeBalance = TradeBalance1;
        } catch (error) {
          console.log(error);
          await countr14();   
        }
      }
      await countr14();     
      


      let ExternalDebt;
      let countr15 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl06_Repeater2_ctl06_HyperLink2');
          await page.waitForTimeout(100);
          let ExternalDebt1 = await page.evaluate(() => {
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
          ExternalDebt = ExternalDebt1;
        } catch (error) {
          console.log(error);
          await countr15();  
        }
      }
      await countr15();     
      

      
      
      let CompositeIndexOfBusinessactivityPMI;
      let countr16 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl09_HyperLink2');
          await page.waitForTimeout(100);
          let CompositeIndexOfBusinessactivityPMI1 = await page.evaluate(() => { 
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
          CompositeIndexOfBusinessactivityPMI = CompositeIndexOfBusinessactivityPMI1;  
        } catch (error) {
          console.log(error);
          await countr16();
        }
      }
      await countr16();

      
      
      let ManufacturingPMI;
      let countr17 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl22_HyperLink2');
          await page.waitForTimeout(100);
          let ManufacturingPMI1 = await page.evaluate(() => { 
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
          ManufacturingPMI = ManufacturingPMI1;
        } catch (error) {
          console.log(error);
          await countr17();
        }
      }
      await countr17();





      let ServicesPMI;
      let countr18 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl26_HyperLink2');
          await page.waitForTimeout(100);
          let ServicesPMI1 = await page.evaluate(() => { 
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
          ServicesPMI = ServicesPMI1;
        } catch (error) {
          console.log(error);
          await countr18();
        }
      }
      await countr18();   

      

      
      let GasolinePrices;
      let countr19 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl05_HyperLink2');
          await page.waitForTimeout(100);
          let GasolinePrices1 = await page.evaluate(() => { 
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
          GasolinePrices = GasolinePrices1; 
        } catch (error) {
          console.log(error);
          await countr19();  
        }
      }
      await countr19();  
      

      
      let RetailSales;
      let countr20 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl11_HyperLink2');
          await page.waitForTimeout(100);
          let RetailSales1 = await page.evaluate(() => { 
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
          RetailSales = RetailSales1;
        } catch (error) {
          console.log(error);
          await countr20();
        }
      }
      await countr20();



      let RetailSalesYoY;
      let countr21 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl10_Repeater2_ctl12_HyperLink2');
          await page.waitForTimeout(100);
          let RetailSalesYoY1 = await page.evaluate(() => { 
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
          RetailSalesYoY = RetailSalesYoY1
        } catch (error) {
          console.log(error);
          await countr21();
        }
      }
      await countr21();
      

      let CorporateTaxRate;
      let countr22 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl11_Repeater2_ctl00_HyperLink2');
          await page.waitForTimeout(100);
          let CorporateTaxRate1 = await page.evaluate(() => { 
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
          CorporateTaxRate = CorporateTaxRate1; 
        } catch (error) {
          console.log(error);
          await countr22();
        }
      }
      await countr22();



      let incomeTaxRate;
      let countr23 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl11_Repeater2_ctl01_HyperLink2');
          await page.waitForTimeout(100);
          let incomeTaxRate1 = await page.evaluate(() => { 
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
          incomeTaxRate = incomeTaxRate1;
        } catch (error) {
          console.log(error);
          await countr23();
        }
      }
      await countr23();
      

      
      let creditRating;
      let countr24 = async()=>{
        try {
          // УНИКАЛЬНАЯ СОРТИРОВКА СТРАНИЦЫ
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#aspnetForm > div.container > div > div > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul:nth-child(1) > li:nth-child(9) > a');
          await page.waitForTimeout(1000);
          let creditRating1 = await page.evaluate((needCountry) => {
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
          creditRating = creditRating1;      
        } catch (error) {
          console.log(error);
          await countr24();
        }
      }
      await countr24();
      
         

      let NumberOfBuildingPermitsIssued;
      let countr25 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl08_Repeater2_ctl00_HyperLink2');
          await page.waitForTimeout(100);
          let NumberOfBuildingPermitsIssued1 = await page.evaluate(() => { 
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
          NumberOfBuildingPermitsIssued = NumberOfBuildingPermitsIssued1;
        } catch (error) {
          console.log(error);
          await countr25();
        }
      }
      await countr25();
      

      let ZEWEconomicSentimentIndex;
      let countr26 = async()=>{
        try {
          await page.goto('https://ru.tradingeconomics.com/indicators', {waitUntil: 'load', timeout: 0});
          await page.waitForTimeout(2000);
          await page.click('#ctl00_ContentPlaceHolder1_ctl00_Repeater1_ctl09_Repeater2_ctl30_HyperLink2');
          await page.waitForTimeout(100);
          let ZEWEconomicSentimentIndex1 = await page.evaluate(() => { 
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
          ZEWEconomicSentimentIndex = ZEWEconomicSentimentIndex1;
        } catch (error) {
          console.log(error);
          await countr26();
        }
      }
      await countr26();

      
      
      
      
      
            
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
        
      let vanya =  async()=>{
        /*
          await economicIndicators.deleteOne({})
          .then(()=>{
            console.log(`ОБЕКТ УДАЛЕН`);
          });
  
  
          await new economicIndicators({
            information: succes,
            timeCheck: Time()
          })
          .save()
          .then((s)=>{
           // console.log(s);
              console.log(`Текущая итерация ${arg}`)
              // Проверка на дальнейшую итерацию
              arg++;
              if(arg < mesCountry.length){
                veryTest(arg)
              } else {
                return;
              }

          })
          */
          mesFillCountry.push(succes);
          console.log(mesFillCountry)
          console.log(`Текущая итерация ${arg}`)
          // Проверка на дальнейшую итерацию
          arg++;
          if(arg < mesCountry.length){
            veryTest(arg)
          } else {

            await economicIndicators.deleteOne({})
            .then(()=>{
              console.log(`ОБЕКТ УДАЛЕН`);
            });
    
            await new economicIndicators({
              information: [
                {
                  Estimatedcalendar: mesFillCountry[0],
                  EuroArea: mesFillCountry[1],
                  China: mesFillCountry[2],
                  Japan: mesFillCountry[3],
                  Germany: mesFillCountry[4],
                  GreatBritain: mesFillCountry[5],
                  France: mesFillCountry[6],
                  India: mesFillCountry[7],
                  Italy: mesFillCountry[8],
                  Brazil: mesFillCountry[9],
                  Canada: mesFillCountry[10],
                  SouthKorea: mesFillCountry[11],
                  Russia: mesFillCountry[12],
                  Spain: mesFillCountry[13],
                  Australia: mesFillCountry[14],
                  Mexico: mesFillCountry[15],
                  Indonesia: mesFillCountry[16],
                  Turkey: mesFillCountry[17],
                  Netherlands: mesFillCountry[18],
                  Switzerland: mesFillCountry[19],
                  SaudiArabia: mesFillCountry[20],
                  Argentina: mesFillCountry[21],
                  SouthAfrica: mesFillCountry[22],
                  Singapore: mesFillCountry[23]
                }
              ],
              timeCheck: Time()
            })
            .save()
            .then((s)=>{
                
            })

            console.log(`ИТЕРАЦИЯ ЗАВЕРШЕНА`);

            return;
          }         
        }
  
        vanya();


       
      });



    }



    veryTest(0)




    

    

    
  }
}