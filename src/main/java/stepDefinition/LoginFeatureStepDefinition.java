package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginFeatureStepDefinition {
	WebDriver driver;
	//***************************************************************************************************************************
	//Scenario: Free CRM Login Test Scenario
	//***************************************************************************************************************************
	@Given("^user is already in Free CRM login page$")
	public void user_is_already_in_Free_CRM_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Maria\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		driver.get("https://www.freecrm.com");
	}

	
	@When("^the page title is Free CRM$")
	public void the_page_title_is_Free_CRM() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", sTitle);

	}

	
	
	@Then("^enter the \"(.*)\" and \"(.*)\"$")
	public void enter_the_username_and_password(String sUsername, String sPassword) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(sUsername);
		driver.findElement(By.name("password")).sendKeys(sPassword);
	}

	
	
	@Then("^clicks on login button$")
	public void clicks_on_login_button() throws Throwable {
		//WebElement ele_Login = driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']"));
		//JavascriptExecutor js = (JavascriptExecutor)driver;
		//js.executeScript("arguments[0].clicks;", ele_Login);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']")).click();
		
	}

	@Then("^user is in home page$")
	public void user_is_in_home_page() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", sTitle);

	}
	
	@Then("^close the browser for Login Test$")
	public void close_the_browser_for_Login_Test() throws Throwable {
		driver.quit();
	}
	

}
