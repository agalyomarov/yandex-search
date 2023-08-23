import puppeteer from 'puppeteer';
import sharp from 'sharp';
import express from 'express';

const app = express();
const port = 3000;

(async () => {
   try {
      const browser_1 = await puppeteer.launch({
         ignoreDefaultArgs: ["--disable-extensions"],
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

      let page_1_browser_1_redirect_url = '';

      page_1_browser_1.on('response', async (response) => {
         if (response.headers()['location']) {
            page_1_browser_1_redirect_url = response.headers()['location'];
            if (page_1_browser_1_redirect_url.startsWith('https://ya.ru/showcaptcha?cc=')) {
               setTimeout(async () => {
                  page_1_browser_1.click('#js-button');
               }, 5000)
            }

            if (page_1_browser_1_redirect_url.startsWith('https://ya.ru/showcaptcha?mt=')) {
               setTimeout(async () => {
                  const captcha_image = await page_1_browser_1.$('#advanced-captcha-form > div > div.AdvancedCaptcha-View > div > img');
                  await captcha_image.screenshot({ path: 'captcha_image.png' });
                  // await sharp('captcha_image.png')
                  //    .resize(150, 90)
                  //    .toFile('captcha_image_resized.png');

                  const instruction_image = await page_1_browser_1.$('#advanced-captcha-form > div > div.AdvancedCaptcha-SilhouetteTask > img');
                  await instruction_image.screenshot({ path: 'instruction_image.png' });

               }, 10000)

            }
         }
      });

      const all_pages_browser_1 = await browser_1.pages();
      all_pages_browser_1[0].close();

      app.get('/yandex/xml', async (req, res) => {
         // http://localhost:3000/yandex/xml?text=библиоека&p=1
         const params = req.query;
         let p = 0;
         if (typeof params.p !== 'undefined') {
            p = params.p;
         }
         const query_url = `https://ya.ru/search/?text=${params.text}&lr=10324&search_source=yaru_desktop_common&p=${p}`;
         await page_1_browser_1.goto(query_url);
         res.send('Hello, Express!');
      });

      app.listen(port, () => {
      });
   } catch (err) {
      console.log(err);
      throw new Error(err);
   }
})();