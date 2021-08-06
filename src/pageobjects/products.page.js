const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdownfilter () { return $('//span[@class="select_container"]/select') }
    get itemslist () { return $$('//div[@class="inventory_item"]//div[@class="pricebar"]/button') }
    get shoppingbasketbtn() {return $('//a[@class="shopping_cart_link"]' )}


   async sortbyPrice () {
      await this.dropdownfilter.waitForClickable({ timeout: 3000 })
      await this.dropdownfilter.selectByIndex(3);    
   }

   async selectcheapitems (Nofcheapitems) {
    /**
      * Code below adds items in cart based on cheapest price
      */
      const count= await this.itemslist.length;
      for(let i = 1; i <=Nofcheapitems; i++){
         await this.itemslist[count-i].click();
         }
   }

   async clickonshoppingbasket () {
      await this.shoppingbasketbtn.click();
   }
   
}

module.exports = new ProductsPage();
