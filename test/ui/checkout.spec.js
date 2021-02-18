require('chromedriver');
const assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Checkout workflow', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('adds a sticker to the cart and checks out', async function() {
    await driver.get('http://localhost:3000');
    
    console.log("BEGIN click BTN SUCCESS");
    await driver.findElement(By.className('btn-success')).click();

    console.log("BEGIN click CART");    
    await driver.findElement(By.id('cart')).sendKeys(Key.RETURN);

    console.log("BEGIN click CHECKOUT");
    await driver.findElement(By.id('checkout')).click();

    let total = await driver.findElement(By.id('total'));

    assert.equal(await total.getText(), 'Total: $5.5');
    });
   
    after(() => driver && driver.quit());
});
