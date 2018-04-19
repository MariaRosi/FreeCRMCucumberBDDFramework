Feature: Free CRM Contacts Feature

Scenario Outline: Create New  Contact In Home Page Scenario

Given user is already in home page with "<username>" and "<password>"
When page title is CRMPRO
Then mouse over to Contacts
Then clicks on new contact
Then fill the "<firstname>" and "<lastname>" and click on save
Then close the browser for Contacts Test

Examples:
		| username | password | firstname | lastname |
		| mariarosi | Change@2252 | Rakesh | Sen |
		
