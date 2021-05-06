var webdriver = require('selenium-webdriver');
var { Given, When, Then } = require('cucumber');
var assert = require('assert')
var assert = require('assert');

Given('I go to my ToDo APP', function () {
  return this.driver.get('http://localhost:3000');
});

When('I add login and password', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[1]/input")).sendKeys("test@test.com");
  return this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[2]/input")).sendKeys("test");
});

When('I click on envoyer button', function () {
  return this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[3]/input")).click();

});

Then('task page displayed and btns shows', function () {
  var actual = this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/h2[1]")).getText();
  var expected = "Liste des tâches";
  assert.equal(this.actual, expected);

  let navText = this.driver.findElement(webdriver.By.id('navbarSupportedContent'));
  this.driver.wait(until.elementLocated(navText, 10000));
  return driver.findElement(navText).getText().then(el => {
    console.log("print text here:" + el);
    const displayTxt = el;
    expect(displayTxt).contains("Tâches", "Déconnexion")
  });
});


When('I add login and password incorrect', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[1]/input")).sendKeys("test@t2est.com");
  return this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[2]/input")).sendKeys("test0");

});

Then('an error message shows', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[1]")).getText();
});


When(' i enter the task name', function () {
  
  return this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[1]/input")).sendKeys("newtask");

});


When('i click on add a task btn', function () {
  
  return this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/div/div[3]/button")).click();

});
Then('a new task should be created successfuly and the localstorage updated', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/ul/li/span[1]/b")).getText();
 var value = await driver.executeScript("return window.localStorage.getItem(arguments[0]);", key);

});


Given('i click on logout btn', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='root']/div/div/ul/li/span[1]/b")).getText();
 var value = await driver.executeScript("return window.localStorage.getItem(arguments[0]);", key);

});

Then('connexion and ajout de tâches btns should be desactivated', function () {
  this.driver.findElement(webdriver.By.xpath("//*[@id='navbarSupportedContent']/ul/li[3]/a")).click();


});






