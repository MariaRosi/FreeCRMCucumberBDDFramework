package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactFeatureStepDefinition {
	WebDriver driver;
	WebElement ele_Contacts;

	// ***************************************************************************************************************************
	// Scenario: Create New Contact In Home Page Scenario
	// ***************************************************************************************************************************

	@Given("^user is already in home page with \"(.*)\" and \"(.*)\"$")
	public void user_is_already_in_home_page_with_username_and_password(String sUsername, String sPassword) throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Maria\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		driver.get("https://www.freecrm.com");

		driver.findElement(By.name("username")).sendKeys(sUsername);
		driver.findElement(By.name("password")).sendKeys(sPassword);

		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']")).click();

	}

	@When("^page title is CRMPRO$")
	public void page_consists_of_user_name() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", sTitle);

	}

	@Then("^mouse over to Contacts$")
	public void mouse_over_to_Contacts() throws Throwable {
		driver.switchTo().frame("mainpanel");
		ele_Contacts = driver.findElement(By.xpath("//a[@title='Contacts']"));
		Actions action = new Actions(driver);
		action.moveToElement(ele_Contacts).build().perform();;
		Thread.sleep(2000);

	}

	@Then("^clicks on new contact$")
	public void clicks_on_new_contact() throws Throwable {
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
		Thread.sleep(2000);

	}
	

	@Then("^fill the \"(.*)\" and \"(.*)\" and click on save$")
	public void fill_the_firstname_and_lastname_and_click_on_save(String sFirstname,String sLastname) throws Throwable {
		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(sFirstname);
		driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(sLastname);
		driver.findElement(By.xpath("//input[@value='Load From Company']//following-sibling::input[@value='Save']")).click();
	}
	
	

	@Then("^close the browser for Contacts Test$")
	public void close_the_browser_for_Contacts_Test() throws Throwable {
		driver.quit();
	}

}
