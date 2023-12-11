describe('Css Selectors', () => {

    // beforeEach(() => {
    //     cy.viewport(1280, 720)
    // })

    it('Css Selector With id', () => {

        cy.visit('https://practice.automationtesting.in/')
        cy.get('#menu-icon').click()
        cy.get('#menu-item-224').click()
        })

    beforeEach(() => {

        cy.visit('https://practice.automationtesting.in/')
    })

    it('register user with already register email', () => {

        cy.get('#menu-icon').click()
        cy.get('#menu-item-50').click()
        cy.get('#reg_email').type('adg.sfdfd@gmail.com')
        cy.get('#reg_password').type('adg.sfdfd@gmail.com')
        cy.get('.woocomerce-FormRow > .woocommerce-Button').click()
        cy.get('.woocommerce-error').should('be.visible')
        // cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').should('be.visible')

    })

    it('login user with already register email', () => {

        cy.get('#menu-icon').click()
        // cy.get('#menu-item-50').click()
        cy.get('#username').type('adg.sfdfd@gmail.com')
        cy.get('#password').type('adg.sfdfd@gmail.com')
        cy.get(':nth-child(3) > .woocommerce-Button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout').should('be.visible')

    })

    it(' Home Page with three Sliders only', () => {

        cy.get('#menu-icon').click()
        cy.get('#menu-item-40').click()
        cy.get('#content > nav > a').click()
        cy.get('#n2-ss-6 > div.n2-ss-slider-1.n2-grab > div > div > div.n2-ss-slide.n2-ss-canvas.n2-ss-slide').should('have.length', 3)

    })

})