
// describe('Radio Button And Checkboxes Practice', () => {

//     beforeEach(() => {
//         cy.visit('https://seleniumbase.io/w3schools/radio_buttons')
//     })

//     it('Testing Radio button', () => {
        
//         //Check visibility
//         cy.get('input#radioId').should('be.visible')
//         cy.get('input.radioclass').should('be.visible')

//         //radio button checked or not
//         cy.get('input#radioId').check().should('be.visible')
//         cy.get('input.radioclass').check().should('be.visible')

//     })
// })

it('Testing Radio button', () => {
        
    cy.visit('https://demo.automationtesting.in/Register.html')
    //Check visibility
    cy.get('.ng-dirty ng-valid ng-valid-required ng-touched ng-valid-parse').should('be.visible')
    // cy.get('input#css').should('be.visible')

    //radio button checked or not
    // cy.get('input#radioId').check().should('be.visible')
    // cy.get('input.radioclass').check().should('be.visible')

})