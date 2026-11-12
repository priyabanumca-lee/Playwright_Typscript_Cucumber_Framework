Feature: Login Page Validation

@smoke
Scenario Outline: login with invalid credentials
  Given I am on the login page
  When I enter valid "<username>" and "<password>"
  Then I click on the login button
  Then I verify error message for invalid credentials

Examples: 
   | username | password |
   | admin_UHHJD&%&^HJKHJ | admin123_UT^&%^&TUG |
   | user1_GHUGUTU^%^&    | pass123_*&^&HGHJ  |