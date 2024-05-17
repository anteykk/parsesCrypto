module.exports = {
  stonk(){
    const puppeteer = require('puppeteer');
    // Модель Акций для базы данных
    let stock = require(`./models/stock`);
    let Time = require(`./public/time`)
    
    let scrape = async () => {
      // Здесь выполняются операции скрапинга...
      // В этой строке мы создаём экземпляр браузера и устанавливаем параметр headless в false. Это позволяет нам наблюдать за тем, что происходит.
          const browser = await puppeteer.launch({ 
          // headless: false,
           'args' : [
            '--no-sandbox',
            '--disable-setuid-sandbox'
          ]
           });
          // Здесь создаём новую страницу в браузере.
          const page = await browser.newPage();
    
          
        
          // Переходим по адресу http://books.toscrape.com/.

           let result;
           let allStocks = async()=>{
            try {
              await page.goto('https://ru.tradingview.com/screener/', {timeout: 40000});
              await page.setViewport({width: 1280, height: 1080})
              
              
              await page.waitForTimeout(2000);
             let result1 = await page.evaluate(async () => {
                let scrollPosition = 0
                let documentHeight = document.body.scrollHeight
          
                while (documentHeight > scrollPosition) {
                  window.scrollBy(0, documentHeight)
                  await new Promise(resolve => {
                    setTimeout(resolve, 1000)
                  })
                  scrollPosition = documentHeight
                  documentHeight = document.body.scrollHeight
                }
        
                let title = document.querySelectorAll(`#js-screener-container > div.tv-screener__content-pane > table > tbody > tr`);
                let mesTitle = [];
                for(let elem of title){
                  mesTitle.push(elem.innerText);
                }
                return mesTitle
                
              })             

              result = result1;
            } catch (error) {
              console.log(error);
              await allStocks();
            }
           }
           await allStocks();


          
         
          let stockScreener = [];
          for(let elem of result){
           let oro = elem;
           let bem = oro.replace(/\n\t|\tt|\t/g, `@`);
           let hana = bem.split(`@`);
         
           let obj = {
             tiker: hana[0],
             price: hana[1],
             changesInProcent: hana[2],
             changes: hana[3],
             technicalRating: hana[4],
             volume: hana[5],
             volumePrice: hana[6],
             tradeCap: hana[7],
             priceProfit: hana[8],
             profitAction: hana[9],
             employees: hana[10],
             sector: hana[11]
           }
           
           obj.tiker = obj.tiker.split(`\n`);
           stockScreener.push(obj);
          }
    
      
    
    
    
          let numStockScreener = stockScreener.length;
          // Хранилище данных
          let dataBasa = [];
          
     
            let num = 0;
            let cycleIteration = async ()=>{


              
                console.log(`Перешол к акциям`);
                 // Здесь создаём новую страницу в браузере.
                

                let searchCountry = stockScreener[num].tiker[0];
              
                  

               let impo = async()=>{
                try {
                      await page.goto('https://ru.investing.com/equities/o2-tv-financial-summary');
                      await page.setViewport({width: 1280, height: 1080})
                      await page.waitForTimeout(1000);
                      await page.$eval('body > div.wrapper > header > div.topBar > div > div.searchDiv.newSearchDiv.js-main-search-wrapper > div.searchBoxContainer.topBarSearch.topBarInputSelected > input', (el, searchCountry) => {
                        return el.value = `${searchCountry}`
                      },  searchCountry);
      
                      await page.click('body > div.wrapper > header > div.topBar > div > div.searchDiv.newSearchDiv.js-main-search-wrapper > div.searchBoxContainer.topBarSearch.topBarInputSelected > label');
                      await page.waitForTimeout(8000);                  
              

                                  // Если кнопка "Отчет" на странице есть то парсим ее содержимое
                                  let mesBalance = []; 



          

                        let check = await page.evaluate(async (arg) => {
                          let title1 = document.querySelector(`#fullColumn > div > div.js-section-wrapper.searchSection.allSection > div:nth-child(2) > div.js-inner-all-results-quotes-wrapper.newResultsContainer.quatesTable > a:nth-child(1) > span.second`).innerText;
                          if(title1 == arg[0][arg[1]].tiker[0]){
                            return true // `ПРОШЛО ПРОВЕРКА, ${title1}, ${arg[0][arg[1]].tiker[0]}`
                          } else {
                            return false
                          }
            
                        }, [stockScreener, num])
                      
                        // Проверка на то - совпадает ли в первой котировке названия с текущей котировкой, если нет - то переходим по второй котировке
                        if(check){
                          await page.click('#fullColumn > div > div.js-section-wrapper.searchSection.allSection > div:nth-child(2) > div.js-inner-all-results-quotes-wrapper.newResultsContainer.quatesTable > a');
                        } else {
                          console.log(`ПЕРЕХОЖУ ПО ВТОРОЙ КОТИРОВКЕ ИБО ПЕРВАЯ НЕ ТА`)
                          await page.click('#fullColumn > div > div.js-section-wrapper.searchSection.allSection > div:nth-child(2) > div.js-inner-all-results-quotes-wrapper.newResultsContainer.quatesTable > a:nth-child(2)');
                        }
                      
                        await page.waitForTimeout(1000);
                        // Берем ссылку из страницы
                        let lol =  await page.evaluate(async () => {
                          let title = document.querySelectorAll(`.navbar_navbar-item-link__2YxUR`)
                          let mesTitle = [];
                          
                          for(let i = 0; i < title.length; i++){
                            if(title[i].innerText == `Отчеты`){
                              mesTitle.push(title[i].href);
                            }
                          }
                          
                          return mesTitle
                        })



                        if(lol.length !== 0){
                          await page.goto(`${lol[0]}`);
                          await page.waitForTimeout(1000);
                    
                          let infa =  await page.evaluate(async () => {
                            let title = document.querySelectorAll(`#rsdiv > div:nth-child(1) > table > tbody > tr`)
                            let mesTitle = [];
                            
                            for(let elem of title){
                              mesTitle.push(elem.innerText)
                            }
                            
                            return mesTitle
                          })
                  
                          // Спарсиные данные финансовой сводки
                          let value = [infa, searchCountry];
                  
                  
                          
                          for(let elem of value[0]){
                            mesBalance.push(elem.split(`\t`))
                          }
                          for(let i = 0; i < mesBalance.length; i++){
                            mesBalance[i] = {
                              text: mesBalance[i][0],
                              one: mesBalance[i][1],
                              two: mesBalance[i][2],
                              three: mesBalance[i][3],
                              for: mesBalance[i][4],
                            }
                          }
                          mesBalance = [
                            value[1],
                            mesBalance
                          ]
                          
                          
                      }                
                    


                





                  // Проверка на то есть ли Отчет в акции
                  if(lol.length !== 0){
                      // Добавления данных в общую базу
                      console.log(`Сюда зашло`)
                      dataBasa.push({
                        ticker: stockScreener[num],
                        finance: mesBalance
                      })  
                  } else {
                        // Добавления данных в общую базу токо без Отчета о акции
                        dataBasa.push({
                          ticker: stockScreener[num]
                        })                  
                  }             
                } catch (error) {
                  console.log(error);
                  await impo();
                }
               }
               await impo();
          

              
              

                num++;
                if(num < numStockScreener){
    
                  
                 // console.log(dataBasa)
                  console.log(`Прошло акцию ${num}`)
                  cycleIteration()
                } else {

                  // Удаления прошлых данных для записи новых
                 await stock.deleteOne({})
                 .then(()=>{
                  console.log(`ОБЕКТ УДАЛЕН`);
                 })


                  await new stock({
                    stocks: dataBasa,
                    parseTime: Time()
                  })
                  .save()
                  .then((s)=>{
                    console.log(s);
                  })
                  console.log(`ПАРСИНГ АКЦИЙ УСПЕШНО ЗАКОНЧИЛСЯ`);
                  
                  return;
                }
          

      
              // browser.close();
              
              
            }

    

          cycleIteration()
          
    
    
    
    };
    
    scrape();
  }
}



  


