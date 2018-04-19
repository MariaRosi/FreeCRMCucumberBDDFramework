package stepDefinition;

import java.util.List;
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

public class DealFeatureStepDefinition {
	
	WebDriver driver;
	WebElement ele_Deals;
	
	@Given("^user already in Free CRM login page$")
	public void user_already_in_Free_CRM_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Maria\\Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		driver.get("https://www.freecrm.com");
	}

	@When("^page title is Free CRM$")
	public void page_title_is_Free_CRM() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", sTitle);
	}

	@Then("^enter username and password$")
	public void enter_username_and_password(DataTable dataTable) throws Throwable {
		List<List<String>> data = dataTable.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^click on login button$")
	public void click_on_login_button() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@class='btn btn-small' and @value='Login']")).click();
	}

	@Then("^user in home page$")
	public void user_in_home_page() throws Throwable {
		String sTitle = driver.getTitle();
		Assert.assertEquals("CRMPRO", sTitle);
	}

	@Then("^mouse over deals$")
	public void mouse_over_deals() throws Throwable {
		driver.switchTo().frame("mainpanel");
		ele_Deals = driver.findElement(By.xpath("//a[@title='Deals']"));
		Actions action = new Actions(driver);
		action.moveToElement(ele_Deals).build().perform();;
		Thread.sleep(2000);

	}

	@Then("^click on new deal$")
	public void click_on_new_deal() throws Throwable {
		driver.findElement(By.xpath("//a[@title='New Deal']")).click();
		Thread.sleep(2000);
	}

	@Then("^enter the deal details$")
	public void enter_the_deal_details(DataTable dataTable) throws Throwable {
		List<List<String>> data = dataTable.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(data.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(data.get(0).get(3));

	}

	@Then("^click on Save$")
	public void click_on_Save() throws Throwable {
		driver.findElement(By.xpath("//input[@value='Save and Create Another']//preceding-sibling::input[@value='Save']")).click();
	}
	
	
	@Then("^close the browser for Deal Test$")
	public void close_the_browser_for_Deal_Test() throws Throwable {
	    driver.quit();
	}


}
