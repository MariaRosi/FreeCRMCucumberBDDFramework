Feature: Free CRM Deal Feature With Map

Scenario: Free CRM Login Test Scenario

Given already in Free CRM login page
When login page title is Free CRM
Then do enter username and password
| Username | Password |
| mariarosi | Change@2252 |
Then do click on login button
Then user will be home page
Then do mouse over deals
Then do click on new deal
Then do enter the deal details
| Title | Amount | Probability | Commission |
| Test Deal | 5000 | 100 | 5 |
Then do click on Save
Then do close the browser for Deal Test


