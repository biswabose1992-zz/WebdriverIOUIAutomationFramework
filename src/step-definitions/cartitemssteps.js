const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const BasketPage = require('../pageobjects/basket.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


Then(/^I should see products page$/, async () => {
    await ProductsPage.sortbyPrice();

});


Then (/^I add (\d+) cheapest products into my basket$/, async (Nofcheapitems)=>{
    await ProductsPage.selectcheapitems(Nofcheapitems);
    await ProductsPage.clickonshoppingbasket();
});


Then(/^I remove the cheapest product from my basket$/, async () => {
    await BasketPage.clickoncheapestitem();
});


Then(/^I checkout products from my basket$/, async () => {
    await BasketPage.Checkoutbasket();
});
