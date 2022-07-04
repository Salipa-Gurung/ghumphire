const {Given, When, Then} = require('@cucumber/cucumber')
const {expect} = require('@playwright/test')

const reviewerPage = 'http://localhost:3000/reviewer'
const allblogPage = 'http://localhost:3000/explore'
const allBlogElement = '.clearfix'


  Given('a reviewer has navigated to reviewer page',async function () {
    await page.goto(reviewerPage)
  });

  When('the reviewer approves blog',async function () {
    await page.click('text=Read more')
    await page.click('text=Approve')
  });

  Then('the status of blog should be approved and blog should be shown on all blogs page',async function () {
    expect.toBeVisible('text=Approve')
    await page.goto(allblogPage)
    await page.locator(allBlogElement)
  });