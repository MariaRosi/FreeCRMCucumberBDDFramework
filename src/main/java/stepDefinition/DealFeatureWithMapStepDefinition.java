package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealFeatureWithMapStepDefinition {

	WebDriver driver;
	WebElement ele_Deals;

	@Given("^already in Free CRM login page$")
	public void already_in_Free_CRM_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Maria\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		driver.get("https://www.freecrm.com");
	}

	@When("^login page title is Free CRM$")
	public void login_page_title_is_Free_CRM() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", sTitle);
	}

	@Then("^do enter username and password$")
	public void do_enter_username_and_password(DataTable dataTable) throws Throwable {
		for(Map<String, String> data : dataTable.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("Username"));
			driver.findElement(By.name("password")).sendKeys(data.get("Password"));
		}
			
	}

	@Then("^do click on login button$")
	public void do_click_on_login_button() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']")).click();
	}

	public void click_on_login_button() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']")).click();
	}

	@Then("^user will be home page$")
	public void user_will_be_home_page() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", sTitle);
	}

	@Then("^do mouse over deals$")
	public void do_mouse_over_deals() throws Throwable {
		driver.switchTo().frame("mainpanel");
		ele_Deals = driver.findElement(By.xpath("//a[@title='Deals']"));
		Actions action = new Actions(driver);
		action.moveToElement(ele_Deals).build().perform();
		;
		Thread.sleep(2000);
	}

	@Then("^do click on new deal$")
	public void do_click_on_new_deal() throws Throwable {
		driver.findElement(By.xpath("//a[@title='New Deal']")).click();
		Thread.sleep(2000);
	}

	@Then("^do enter the deal details$")
	public void do_enter_the_deal_details(DataTable dataTable) throws Throwable {
		for(Map<String, String> data : dataTable.asMaps(String.class, String.class)) {
			driver.findElement(By.id("title")).sendKeys(data.get("Title"));
			driver.findElement(By.id("amount")).sendKeys(data.get("Amount"));
			driver.findElement(By.id("probability")).sendKeys(data.get("Probability"));
			driver.findElement(By.id("commission")).sendKeys(data.get("Commission"));
		}

	}

	@Then("^do click on Save$")
	public void do_click_on_Save() throws Throwable {
		driver.findElement(
				By.xpath("//input[@value='Save and Create Another']//preceding-sibling::input[@value='Save']")).click();
	}

	@Then("^do close the browser for Deal Test$")
	public void do_close_the_browser_for_Deal_Test() throws Throwable {
		driver.quit();
	}
}
