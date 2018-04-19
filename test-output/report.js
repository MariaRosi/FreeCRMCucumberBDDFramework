$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Contacts Feature",
  "description": "",
  "id": "free-crm-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create New  Contact In Home Page Scenario",
  "description": "",
  "id": "free-crm-contacts-feature;create-new--contact-in-home-page-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in home page with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "mouse over to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "clicks on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "fill the \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and click on save",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser for Contacts Test",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-contacts-feature;create-new--contact-in-home-page-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 13,
      "id": "free-crm-contacts-feature;create-new--contact-in-home-page-scenario;;1"
    },
    {
      "cells": [
        "mariarosi",
        "Change@2252",
        "Rakesh",
        "Sen"
      ],
      "line": 14,
      "id": "free-crm-contacts-feature;create-new--contact-in-home-page-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Create New  Contact In Home Page Scenario",
  "description": "",
  "id": "free-crm-contacts-feature;create-new--contact-in-home-page-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in home page with \"mariarosi\" and \"Change@2252\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "mouse over to Contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "clicks on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "fill the \"Rakesh\" and \"Sen\" and click on save",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser for Contacts Test",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mariarosi",
      "offset": 35
    },
    {
      "val": "Change@2252",
      "offset": 51
    }
  ],
  "location": "ContactFeatureStepDefinition.user_is_already_in_home_page_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 29423482839,
  "status": "passed"
});
formatter.match({
  "location": "ContactFeatureStepDefinition.page_consists_of_user_name()"
});
formatter.result({
  "duration": 56113422,
  "status": "passed"
});
formatter.match({
  "location": "ContactFeatureStepDefinition.mouse_over_to_Contacts()"
});
formatter.result({
  "duration": 2272199516,
  "status": "passed"
});
formatter.match({
  "location": "ContactFeatureStepDefinition.clicks_on_new_contact()"
});
formatter.result({
  "duration": 2260938172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh",
      "offset": 10
    },
    {
      "val": "Sen",
      "offset": 23
    }
  ],
  "location": "ContactFeatureStepDefinition.fill_the_firstname_and_lastname_and_click_on_save(String,String)"
});
formatter.result({
  "duration": 669527591,
  "status": "passed"
});
formatter.match({
  "location": "ContactFeatureStepDefinition.close_the_browser_for_Contacts_Test()"
});
formatter.result({
  "duration": 816330690,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Example"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already in Free CRM login page"
    },
    {
      "line": 7,
      "value": "#When the page title is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then enter the \"mariarosi\" and \"Change@2252\""
    },
    {
      "line": 9,
      "value": "#Then clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is in home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser for Login Test"
    },
    {
      "line": 14,
      "value": "#With Example"
    }
  ],
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already in Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the page title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser for Login Test",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "mariarosi",
        "Change@2252"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already in Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the page title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter the \"mariarosi\" and \"Change@2252\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user is in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close the browser for Login Test",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefinition.user_is_already_in_Free_CRM_login_page()"
});
formatter.result({
  "duration": 9530961198,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.the_page_title_is_Free_CRM()"
});
formatter.result({
  "duration": 173832349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mariarosi",
      "offset": 11
    },
    {
      "val": "Change@2252",
      "offset": 27
    }
  ],
  "location": "LoginFeatureStepDefinition.enter_the_username_and_password(String,String)"
});
formatter.result({
  "duration": 569184928,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.clicks_on_login_button()"
});
formatter.result({
  "duration": 9240948984,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.user_is_in_home_page()"
});
formatter.result({
  "duration": 33515363,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.close_the_browser_for_Login_Test()"
});
formatter.result({
  "duration": 782474530,
  "status": "passed"
});
});