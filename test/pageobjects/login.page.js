import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get signInButton () {
        return $(".auxiliary-actions > ul  .internal.sign-in-link");
    }
    get newMailButton () {
        return $("[class='textContainer label-194']")
    }
    get selectingEmail () {
        return $("div#PickerFooterUseTypeAddress > .MIV76.j7as6")
    }
    get emailReceiver () {
        return $(".TvqWh div[role='textbox']")
    }
    get emailTitle () {
        return $("/html//div[@id='docking_InitVisiblePart_0']/div[@class='cBeRi dMm6A']/div[3]//input")
    }
    get emailBody () {
        return $("div#editorParent_1 > div[role='textbox']")
    }
    get inputUsername () {
        return $("input[name='loginfmt']");
    }
    get inputPassword () {
        return $("input[name='passwd']");
    }
    get btnSubmit () {
        return $("input#idSIButton9");
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await browser.pause(5000)
        await $("[data-report-event='Signin_Submit']").click()
        await browser.pause(5000)
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(5000)
        await $("input#idBtn_Back").click()
        await browser.pause(8000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
