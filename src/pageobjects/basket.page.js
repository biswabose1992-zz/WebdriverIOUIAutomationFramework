const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasketPage extends Page {
    /**
     * define selectors using getter methods
     */
     get listofitmesinbasket() {return $$('//div[@class="inventory_item_price"]/../button' )}
     get checkoutbtn() {return $('#checkout')}
   
     async clickoncheapestitem () {
  
        var count= await this.listofitmesinbasket.length;
        
        await this.listofitmesinbasket[0].click();
     
     } 

     async Checkoutbasket () {
        await this.checkoutbtn.click();
     
     } 
}

module.exports = new BasketPage();
