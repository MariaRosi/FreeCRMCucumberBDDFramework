Feature: Free CRM Login Feature

#Without Example
#Scenario: Free CRM Login Test Scenario
#
#Given user is already in Free CRM login page
#When the page title is Free CRM
#Then enter the "mariarosi" and "Change@2252"
#Then clicks on login button
#Then user is in home page
#Then close the browser for Login Test


#With Example
Scenario Outline: Free CRM Login Test Scenario

Given user is already in Free CRM login page
When the page title is Free CRM
Then enter the "<username>" and "<password>"
Then clicks on login button
Then user is in home page
Then close the browser for Login Test

Examples:
		| username | password |
		| mariarosi | Change@2252 |

