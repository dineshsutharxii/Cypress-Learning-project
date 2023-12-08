
it("Read from file using fixture()", () => {

    cy.fixture('./example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('read file using readFile()', () => {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        console.log(data.name)
        console.log(data.email)
    })
})

it('Write files using writeFile', () => {

    cy.writeFile('./sample.txt', 'Hello, I am inside sample.txt \n', {flag : 'a+'})
    cy.writeFile('./sample.txt', 'Add me too in your file \n', {flag : 'a+'})
})