Feature: Login Page Validation


Scenario: login with valid credentials
  Given I am on the login page
  When I enter valid username and password
  Then I click on the login button
  Then I should be redirected to the dashboard page