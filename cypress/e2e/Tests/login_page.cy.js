import { Login_page } from "../Pages/Login_page";

const login_page = new Login_page()

it('POM Testcase', ()=> {
    
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login_page.enterUsername('Admin')
    login_page.enterPassword('admin123')
    login_page.clickButton()
})