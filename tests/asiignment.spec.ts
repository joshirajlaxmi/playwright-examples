import { expect } from "@playwright/test";

const {test} = require('@playwright/test')

test.only('assignment test', async({browser, page}) => {
    const userName= page.locator("#userEmail");
    const password= page.locator("[type='password']");
    const loginbtn= page.locator("#login");
    const cardTitles = page.locator(".card-body b");

    await page.goto('https://rahulshettyacademy.com/client');

    await userName.type("raji.joshi@example.com");
    await password.type("#RajiJoshi19");
    await loginbtn.click();
    // console.log(await cardTitles.first().textContent());//to get the fst element from array of link elements  
    // await expect(cardTitles.first()).toHaveText('zara coat 3');
    //Wait till all network calls are loaded
    await page.waitForLoadState('networkidle');
    const allcardTitles = await cardTitles.allTextContents();
    console.log(allcardTitles);
})