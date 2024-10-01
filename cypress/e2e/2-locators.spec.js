<reference types="cypress" />
describe('Locator test', () => {
    it('first test', () => {

        cy.visit('')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //by tagname
        cy.get('input')

        //by id
        cy.get('#inputEmail1')

        //by class
        cy.get('.input-full-width')

        //by attribute name
        cy.get('[fullwidth]')

        //by attribute and value
        cy.get('[placeholder="Email"]')

        //by entire class name
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by two attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by tag attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')

    });

    it('second test', () => {
        cy.visit('')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Theory
        //get() - find element on the page by locator globally
        //find() - find child elements by locator
        //contains() -find HTML text and by text and locator
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')

        cy.contains('nb-card','Horizontal form').find('button')
        cy.contains('nb-card','Horizontal form').get('button')
        cy.contains('nb-card','Horizontal form').find('[type="submit"]')
        cy.contains('nb-card','Horizontal form').contains('Sign in')

        //Cypress chains and Dom
        cy.get('#inputEmail3')
            .parents('nb-card')
            .find('button')
            .should('contain','Sign in')
            .parents('form')
            .find('.custom-checkbox')
            .click()
            
    });

    it.only('save subject of the command', () => {
        cy.visit('')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain','Password')

        //CANT DO THINGS LIKE
        // const usingTheGrid = cy.contains('nb-card','Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain','Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain','Password')

        //1.Cypress alias
        cy.contains('nb-card','Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain','Password')

        //2. Cypress then() method wrap for use cypress chainable
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').then(usingTheGridForm=> {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain','Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain','Password')
        })

    });
});