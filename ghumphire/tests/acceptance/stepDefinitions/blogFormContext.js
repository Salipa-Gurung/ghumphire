const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test")

const addPostPage = 'http://localhost:3000/addPost'
const reviewerPage = 'http://localhost:3000/reviewer'
const formElement = '#contact-form'

  Given('a user has navigated to the add experience page',async function () {
    await page.goto(addPostPage)
    expect(formElement).toBeVisible()
  });

  When('the user fills the form',async function () {
    await page.fill('#authorName','Ram Krishna')
    await page.fill('#email','Ramkrishna@gmail.com')
    await page.fill('#title','Ghumna Gako Story')
    await page.fill('#content','Ekdamai ramailo tour')
    await page.fill('#location','Dang')
    await page.fill('#tag','Dang')
    await page.fill('#priceRange','5000')
    await page.click('#cf-submit')
  });

  Then('the blog should be left to be reviewed by reviewer',async function () {
    await page.goto(reviewerPage)
  });