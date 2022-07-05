const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

const url = 'http://localhost:3000/readmore/62299fa5aaddf9608699a365'
const emailInputField = '.swal-modal'
const emailInput = '.swal-content'
const submitEmail = '.swal-button-container'

Given('a user has navigated to detailed page of a blog',async function () {
    await page.goto(url)
});


When('the user clicks Like button',async function () {
    // await page.locator('#btn-like').waitFor()
    await page.click('#btn-like', {force:true})
});

Then('a pop up which takes email id as input should be displayed on the webUI',async function () {
    // expect(emailInputField).toBeVisible() 
    // const locator = await page.locator(emailInputField).waitFor()
    // expect(locator).toBeVisible()
    await page.fill('.swal-content__input','ram33@gmail.com')
    await page.click('text=OK')
});