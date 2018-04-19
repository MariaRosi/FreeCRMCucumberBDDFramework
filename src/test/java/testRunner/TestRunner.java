package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
	    //this code will only look into "features/" folder for features
	    features={"D:\\Maria\\Selenium\\Workspace\\FreeCRMCucumberBDDFramework\\src\\main\\java\\features\\deal.feature"},
	    glue = { "stepDefinition" },
	    format = {"pretty","html:test-output"},
	    dryRun=false,
	    monochrome=true,
	    strict=true
	    )



public class TestRunner {
	


}
