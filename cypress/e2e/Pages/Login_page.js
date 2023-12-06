export class Login_page{

    login_page_username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_page_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_page_login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.login_page_username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.login_page_password_textbox).type(password)
    }

    clickButton(){
        cy.get(this.login_page_login_button).click()
    }    
    
}