
Feature: Approve blogs
 As a reviewer
 I want to approve blogs
 So that status of blog will be approved

 Scenario: Approving Blogs by the reviewer
   Given a reviewer has navigated to reviewer page
   When the reviewer approves blog 
   Then the status of blog should be approved and blog should be shown on all blogs page