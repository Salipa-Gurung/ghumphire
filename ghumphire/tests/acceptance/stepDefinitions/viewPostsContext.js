const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'
const explore = 'http://localhost:3000/explore'

//define selectors
const homepageElement = '#body'
const viewAllElement = '.btn-all-post'
const exploreBody = '#explore-body'

Given('a user has navigated to the homePage',async function () {
    // navigating to homepage which auto waits for the page to load
    await page.goto(url)
    // finding body element of homepage
    const locator = page.locator(homepageElement)
    // check that the elements of homepage is visible
    expect(locator).toBeVisible()
    // clicks element with text selector
    await page.click('text=Explore Us')
});

When('the user clicks Explore Us, it navigates to View all post button',async function () {
    // clicks element by class name
    await page.click(viewAllElement)
});

Then('all blog posts should be displayed on the webUI',async function () {
    // storing the returned string format frame's url  
    const url = await page.url()
    // wait till strings of url matches string of explore variables
    expect(url).toMatch(explore)
    // assert that it's visible
    expect(exploreBody).toBeVisible()
});
