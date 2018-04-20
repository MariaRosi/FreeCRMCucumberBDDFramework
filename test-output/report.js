$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Maria/Selenium/Workspace/FreeCRMCucumberBDDFramework/src/main/java/features/dealmap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deal Feature With Map",
  "description": "",
  "id": "free-crm-deal-feature-with-map",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-deal-feature-with-map;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "already in Free CRM login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login page title is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "do enter username and password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "mariarosi",
        "Change@2252"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "do click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user will be home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "do mouse over deals",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "do click on new deal",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "do enter the deal details",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "Test Deal",
        "5000",
        "100",
        "5"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "do click on Save",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "do close the browser for Deal Test",
  "keyword": "Then "
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.already_in_Free_CRM_login_page()"
});
formatter.result({
  "duration": 9353532431,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.login_page_title_is_Free_CRM()"
});
formatter.result({
  "duration": 104545303,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 786445784,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_click_on_login_button()"
});
formatter.result({
  "duration": 7626559021,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.user_will_be_home_page()"
});
formatter.result({
  "duration": 20950394,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_mouse_over_deals()"
});
formatter.result({
  "duration": 2195690055,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_click_on_new_deal()"
});
formatter.result({
  "duration": 2217450503,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_enter_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 720980057,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_click_on_Save()"
});
formatter.result({
  "duration": 132619237,
  "status": "passed"
});
formatter.match({
  "location": "DealFeatureWithMapStepDefinition.do_close_the_browser_for_Deal_Test()"
});
formatter.result({
  "duration": 691276288,
  "status": "passed"
});
});