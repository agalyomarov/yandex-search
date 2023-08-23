import puppeteer from 'puppeteer';

import * as path from 'path';
import * as fs from 'fs';
import express from 'express';
const app = express();
const port = 3000;

(async () => {
   try {
      const browser = await puppeteer.launch({
         ignoreDefaultArgs: ["--disable-extensions"],
         // executablePath: '/usr/bin/chromium-browser',
         executablePath: '/usr/local/bin/chromium',
         args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--no-first-run',
            `--window-size=1440,920`,
            '--ignore-certificate-errors',
         ],
         defaultViewport: { width: 1440, height: 800 },
         headless: false,
      });

      const page_1 = await browser.newPage();

      // await puppeteerPageProxy(page_1, proxyServer);

      page_1.setDefaultNavigationTimeout(0);


      // const page_2 = await browser_2.newPage();
      // page_2.setDefaultNavigationTimeout(0);


      // const page_3 = await browser_2.newPage();
      // page_3.setDefaultNavigationTimeout(0);

      // const all_pages_browser = await browser.pages();
      // const all_pages_browser_2 = await browser_2.pages();
      // const all_pages_browser_3 = await browser_3.pages();
      // all_pages_browser[0].close();
      // all_pages_browser_2[0].close();
      // all_pages_browser_3[0].close();


      // await page_1.goto('https://2ip.io/ru/geoip/');

      // let page_1_url = '';


      // let page_1_error = false;
      // page_1.on('response', async (response) => {
      //    const request = response.request();
      //    if (request.redirectChain().length) {
      //       const redirect_url = request.redirectChain()[0].response().url();
      //       // if (redirect_url.startsWith('https://mc.yandex.ru') && !page_1_error) {
      //       // page_1_error = true;
      //       // page_1.close();
      //       // console.log(page_1_url);
      //       // await page_2.goto(page_1_url);
      //       // }
      //       // console.log(request.redirectChain()[0].response().url() + "\n");
      //    }
      // });

      // await page_1.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      // await page_1.focus("#passp-field-login")
      // await page_1.keyboard.type("omaraly971215");
      // await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      // await page_1.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      // await page_1.focus("#passp-field-passwd")
      // await page_1.keyboard.type("151297ylaramo");
      // await new Promise((resolve, reject) => setTimeout(resolve, 500))
      // await page_1.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")
      // await new Promise((resolve, reject) => {
      //    setInterval(async () => {
      //       const password = fs.readFileSync(path.resolve('password')).toString();
      //       if (password) {
      //          fs.writeFileSync(path.resolve('password'), '', 'utf8');
      //          await page_1.focus("#passp-field-phoneCode")
      //          await page_1.keyboard.type(password);
      //          resolve();
      //       };
      //    }, 500)
      // })
      // /google/xml?groupby=100&loc=1000028&country=2008&lr=RU&domain=10&device=desktop
      // console.log('page_1 done');

      // app.get('/yandex/xml', async (req, res) => {
      //    const params = req.query;
      //    let p = 0;
      //    if (typeof params.p !== 'undefined') {
      //       p = params.p;
      //    }
      //    const query_url = `https://ya.ru/search/?text=${params.text}&lr=10324&search_source=yaru_desktop_common&p=${p}`;
      //    // page_1_url = query_url;
      //    // if (!page_1_error) {
      //    await page_1.goto(query_url);
      //    // }
      //    res.send('Hello, Express!');
      // });

      /*       app.listen(port, () => {
               console.log(`http://localhost:3000`);
            }); */
   } catch (err) {
      console.log(err);
      throw new Error(err);
   }
})();