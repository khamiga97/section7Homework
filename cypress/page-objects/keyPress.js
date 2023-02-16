const target = '#target'
const result = '#keyPressResult'

class KeyPressPage {
    pressEnterOnTarget() {
        cy.get(target).type('{enter}')
        cy.get(result).should('have.text', 'You entered: ENTER')
    }
}

export default KeyPressPage;