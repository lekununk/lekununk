import LoginPage from '../pageobjects/login.page.js'
// npx wdio wdio.conf.js
describe('Application', async() => {
    it('Login and Write an email', async() => {
        // open Outlook Page then maximize the window
        await browser.url("https://outlook.live.com/owa/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Outlook')
        await browser.maximizeWindow()
        await browser.pause(5000)

        // Login to the Hotmail accounts
        // Commented values Under here are inside the login.page.js
        // await $("input[name='loginfmt']").setValue("testingGun@hotmail.com")
        // await $("[data-report-event='Signin_Submit']").click()
        // await $("input[name='passwd']").setValue("TestingPurPose!23")
        // const loginButton = await $("input#idSIButton9")
        // await loginButton.click()
        // await $("input#idBtn_Back").click()

        await LoginPage.signInButton.click()
        await browser.pause(5000)
        await LoginPage.login("testingGun@hotmail.com", "TestingPurPose!23")

        //Write a new Email to CACI Company
        await LoginPage.newMailButton.click()
        await LoginPage.emailReceiver.setValue("Interview@CACI.com")
        await LoginPage.selectingEmail.click()
        await LoginPage.emailTitle.setValue("Dear Interviewers")
        await browser.pause(5000)
        await LoginPage.emailBody.setValue("I truly truly want to work at CACI. This is my dream job.\n(I understand if you think this could be a lie, but Please trust me!! 2 Years ago, I was living 5 mins away from here and I was running around this building and dreaming about working here nuemorous time!)\n\nI admit that I am not perfect, but I always do my best to learn new things and grow.\nTo prove myself, I learned this framework (Webdriver.IO) and used it first time for this interview.\n\nI am eager to have the opportunity.\n\nThank you for reading.\n\nBest Regards")
        await browser.pause(50000)
    });
});
