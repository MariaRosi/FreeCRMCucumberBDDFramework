Feature: Free CRM Deal Feature

Scenario: Free CRM Login Test Scenario

Given user already in Free CRM login page
When page title is Free CRM
Then enter username and password
| mariarosi | Change@2252 |
Then click on login button
Then user in home page
Then mouse over deals
Then click on new deal
Then enter the deal details
| Test Deal | 5000 | 100 | 5 |
Then click on Save
Then close the browser for Deal Test


