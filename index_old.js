import puppeteer from 'puppeteer';

import * as path from 'path';
import * as fs from 'fs';
import express from 'express';
const app = express();
const port = 3000;

(async () => {
   try {
      const browser_1 = await puppeteer.launch({
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
      const browser_2 = await puppeteer.launch({
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
      const browser_3 = await puppeteer.launch({
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
      const browser_4 = await puppeteer.launch({
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
      const browser_5 = await puppeteer.launch({
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

      const page_1_browser_1 = await browser_1.newPage();
      page_1_browser_1.setDefaultNavigationTimeout(0);

      const page_1_browser_2 = await browser_2.newPage();
      page_1_browser_2.setDefaultNavigationTimeout(0);

      const page_1_browser_3 = await browser_3.newPage();
      page_1_browser_3.setDefaultNavigationTimeout(0);

      const page_1_browser_4 = await browser_4.newPage();
      page_1_browser_4.setDefaultNavigationTimeout(0);

      const page_1_browser_5 = await browser_5.newPage();
      page_1_browser_5.setDefaultNavigationTimeout(0);

      const all_pages_browser_1 = await browser_1.pages();
      all_pages_browser_1[0].close();

      const all_pages_browser_2 = await browser_2.pages();
      all_pages_browser_2[0].close();

      const all_pages_browser_3 = await browser_3.pages();
      all_pages_browser_3[0].close();

      const all_pages_browser_4 = await browser_4.pages();
      all_pages_browser_4[0].close();

      const all_pages_browser_5 = await browser_5.pages();
      all_pages_browser_5[0].close();

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

      await page_1_browser_1.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      await page_1_browser_1.focus("#passp-field-login")
      await page_1_browser_1.keyboard.type("omaraly971215.1");
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      await page_1_browser_1.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      await page_1_browser_1.focus("#passp-field-passwd")
      await page_1_browser_1.keyboard.type("151297Yapon");
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      await page_1_browser_1.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")

      await page_1_browser_2.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      await page_1_browser_2.focus("#passp-field-login")
      await page_1_browser_2.keyboard.type("omaraly971215.2");
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      await page_1_browser_2.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      await page_1_browser_2.focus("#passp-field-passwd")
      await page_1_browser_2.keyboard.type("151297Yapon");
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      await page_1_browser_2.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")

      await page_1_browser_3.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      await page_1_browser_3.focus("#passp-field-login")
      await page_1_browser_3.keyboard.type("omaraly971215.3");
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      await page_1_browser_3.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      await page_1_browser_3.focus("#passp-field-passwd")
      await page_1_browser_3.keyboard.type("151297Yapon");
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      await page_1_browser_3.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")


      await page_1_browser_4.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      await page_1_browser_4.focus("#passp-field-login")
      await page_1_browser_4.keyboard.type("omaraly971215.4");
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      await page_1_browser_4.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      await page_1_browser_4.focus("#passp-field-passwd")
      await page_1_browser_4.keyboard.type("151297Yapon");
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      await page_1_browser_4.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")

      await page_1_browser_5.goto('https://passport.yandex.ru/auth?retpath=https%3A%2F%2Fmail.yandex.ru');
      await page_1_browser_5.focus("#passp-field-login")
      await page_1_browser_5.keyboard.type("omaraly971215.5");
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      await page_1_browser_5.click('.Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit');
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      await page_1_browser_5.focus("#passp-field-passwd")
      await page_1_browser_5.keyboard.type("151297Yapon");
      await new Promise((resolve, reject) => setTimeout(resolve, 500))
      await page_1_browser_5.click(".Button2.Button2_size_xxl.Button2_view_contrast-action.Button2_width_max.Button2_type_submit")


      app.get('/yandex/xml', async (req, res) => {
         const params = req.query;
         let p = 0;
         if (typeof params.p !== 'undefined') {
            p = params.p;
         }
         const query_url = `https://ya.ru/search/?text=${params.text}&lr=10324&search_source=yaru_desktop_common&p=${p}`;
         // await page_1.goto(query_url);
         res.send('Hello, Express!');
      });

      app.listen(port, () => {
         console.log(`http://localhost:3000`);
      });
   } catch (err) {
      console.log(err);
      throw new Error(err);
   }
})();