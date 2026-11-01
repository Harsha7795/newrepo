Feature: Login functionality

Background:
Given user navigate on "https://practicetestautomation.com/practice-test-login/"

@Smoke
Scenario: login with valid credentials
When user entered username as "student"
When user entered password as "Password123"
When user clicks the login button
Then user navigates to next page

@Regression
Scenario Outline: login with invalid credentials
When user entered username as "<username>"
When user entered password as "<password>"
When user clicks the login button
Then user will get invalid credentials

Examples:
        |username|password|
        |Harsha775|Password123|
        |student|Harsha775|
        |Harsha775|Harsha775|