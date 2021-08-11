const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('input[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        /**
         * Assertions to verify object is present or not
         */
        await expect(this.inputUsername).toBeDisplayed();
        await this.inputUsername.setValue(username);
        await expect(this.inputPassword).toBeDisplayed();
        await this.inputPassword.setValue(password);
        await expect(this.btnSubmit).toBeDisplayed();
        await this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
        
    }
}

module.exports = new LoginPage();
