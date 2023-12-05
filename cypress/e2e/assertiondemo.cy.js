it("Assertion Demo", () => {

    cy.visit("https://example.cypress.io")
    cy.contains('get').click()

    // SHOULD EXAMPLE 
    // cy.get('#query-btn').should('contain', 'Button')
    // cy.get('#query-btn')
    // .should('contain', 'Button')
    // .should('have.class', 'query-btn')
    // .should('be.visible')
    // .should('be.enabled')

    // AND EXAMPLE
    // cy.get('#query-btn')
    // .should('contain', 'Button')
    // .and('have.class', 'query-btn')
    // .and('be.visible')
    // .and('be.disabled')

    //EXPECT EXAMPLE
    // let name = 'cypress'
    // expect(name).to.be.equal('cypress')

    //ASSERT EXAMPLES
    assert.equal(4,4, "4 is equal")
    assert.equal(4,'4', "4 is equal")
    assert.strictEqual(4, 4, 'not equal')
})