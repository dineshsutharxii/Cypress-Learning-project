import { Login_page } from "../Pages/Login_page";

const login_page = new Login_page()

//Testcases without describe block
// it('POM Testcase 1', ()=> {

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     login_page.enterUsername('Admin')
//     login_page.enterPassword('admin123')
//     login_page.clickButton()
// })

// it('POM Testcase 2', ()=> {
    
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     login_page.enterUsername('Admin')
//     login_page.enterPassword('admin123')
//     login_page.clickButton()
// })

//Testcases  describe block

describe("Testcases in describe block", () =>{
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Testcase 1 in describe', ()=> {
        login_page.enterUsername('Admin')
        login_page.enterPassword('admin123')
        login_page.clickButton()
        cy.get('.oxd-userdropdown-name').click()
    })
    
    it('Testcase 2 in describe', ()=> {
        login_page.enterUsername('Administrator')
        login_page.enterPassword('admin123')
        login_page.clickButton()
        cy.get('.oxd-userdropdown-name').click()
    })
})