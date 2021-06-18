class loginPage{

    fillLoginValues = (email,pwd) => {
        cy.fixture('login.json').then((locators) =>{
            if(email) cy.get(locators.email).type(email);
            if(pwd) cy.get(locators.password).type(pwd);
        })
    }

    fillForgotPwdValues = (username) => {
        cy.fixture('login.json').then((locators) =>{
            if(username) cy.get(locators.usernameToReset).type(username);
        })
    }

    openForgotPwdForm = () => {
        cy.fixture('login.json').then((locators) =>{
            cy.get(locators.forgotPasswordLink).click();
        })
    }

    submit = (email,pwd) => {
        cy.fixture('login.json').then((locators) =>{
            this.fillLoginValues(email,pwd);
            if(email && pwd) cy.get(locators.loginButton).click();
        })
    }

    resetPassword = (username) => {
        cy.fixture('login.json').then((locators) =>{
            this.fillForgotPwdValues(username)
            cy.get(locators.resetPasswordButton).click();
        })
    }

    clearFields = () => {
        cy.fixture('login.json').then((locators) =>{
            cy.get(locators.email).clear();
            cy.get(locators.password).clear();
        })
    }

    validateNotifyMessage = (text) => {
        cy.fixture('login.json').then((locators) =>{
            cy.get(locators.notifyMessage).should('have.text', text);
        })
    }

    validateSubmitBtnDisabled = () => {
        cy.fixture('login.json').then((locators) =>{
            cy.get(locators.loginButton).should('be.disabled');
        })
    }

    validateSubmitBtnEnabled = () => {
        cy.fixture('login.json').then((locators) =>{
            cy.get(locators.loginButton).should('be.enabled');
        })
    }
}
export default new loginPage();