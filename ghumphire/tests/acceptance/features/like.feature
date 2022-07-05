
Feature: Give like to a post in detail page of a blog
 As a user
 I want to click on Like button
 So that I can enter my email and give like

 Scenario: Give Like
   Given a user has navigated to detailed page of a blog
   When the user clicks Like button
   Then a pop up which takes email id as input should be displayed on the webUI