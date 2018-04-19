$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Maria/Selenium/Workspace/FreeCRMCucumberBDDFramework/src/main/java/features/deal.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deal Feature",
  "description": "",
  "id": "free-crm-deal-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-deal-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user already in Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "page title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter username and password",
  "rows": [
    {
      "cells": [
        "mariarosi",
        "Change@2252"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user in home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "mouse over deals",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click on new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter the deal details",
  "rows": [
    {
      "cells": [
        "Test Deal",
        "5000",
        "100",
        "5"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser for Deal Test",
  "keyword": "Then "
});
formatter.match({
  "location": "DealFeatureStepDefinition.user_already_in_Free_CRM_login_page()"
});
formatter.result({
  "duration": 13123540868,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.page_title_is_Free_CRM()"
});
formatter.result({
  "duration": 176599260,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 514965146,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.click_on_login_button()"
});
formatter.result({
  "duration": 30458398676,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.user_in_home_page()"
});
formatter.result({
  "duration": 30329039,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.mouse_over_deals()"
});
formatter.result({
  "duration": 2194817594,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.click_on_new_deal()"
});
formatter.result({
  "duration": 2249971026,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.enter_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 611950478,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.click_on_Save()"
});
formatter.result({
  "duration": 133628260,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureStepDefinition.close_the_browser_for_Deal_Test()"
});
formatter.result({
  "duration": 55921,
  "status": "passed"
});
});