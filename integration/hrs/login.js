import loginPage from '../support/pages/loginPage';

describe('Practical task', function (){

    var url = 'https://cc.healthrecoverysolutions.com/login';

    beforeEach(function(){
        cy.visit(url);
    })

    it('Invalid creds',function() {
        loginPage.submit('wrong_user','test');
        loginPage.validateNotifyMessage('Username and/or password invalid');
    })

    it('Submit button disabled by default',function() {
        loginPage.submit('','');
        loginPage.validateSubmitBtnDisabled();
    })

    it('Submit button enabled once a field is filled',function() {
        loginPage.submit('test','');
        loginPage.validateSubmitBtnEnabled();
    })

    it('Submit button disabled once fields are cleared',function() {
        loginPage.fillLoginValues('test','etete');
        loginPage.clearFields();
        loginPage.validateSubmitBtnDisabled();
    })

    it('Empty username to reset password',function() {
        loginPage.openForgotPwdForm();
        loginPage.resetPassword('');
        loginPage.validateNotifyMessage('Failed to submit reset password request.');
    })
    
    it('Valid username to reset password',function() {
        loginPage.openForgotPwdForm();
        loginPage.resetPassword('miguel.peceros@company.com');
        loginPage.validateNotifyMessage('Reset password request successfully submitted.');
    })
    
})