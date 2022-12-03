const {test, expect} = require('@playwright/test');

test('first playwright test', async({browser, page}) => {
    const userName = page.locator('#username');
    const loginbtn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractice');

    await userName.type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await loginbtn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    //give correct creds
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await loginbtn.click();
    console.log(await cardTitles.first().textContent());//to get the fst element from array of link elements  
    console.log(await cardTitles.nth(1).textContent());//to get the second element
    //get list of all mathing the titles
    await Promise.all(
        [
            page.waitForNavigation(),
            loginbtn.click()
        ]
    )
    const allTitles = await cardTitles.allTextContents();
});

test('test only google', async({browser, page}) => {
    await page.goto('https://google.com');
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})