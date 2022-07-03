
Feature: View all posts
 As a user
 I want to click on Explore Us hero button then click View all post button
 So that I can view all posts

 Scenario: View all blog posts
   Given a user has navigated to the homePage
   When the user clicks Explore Us, it navigates to view all post button 
   Then all blog posts should be displayed on the webUI