const addButton = 'button[onclick="addElement()"]'
const addedElement = '.added-manually'

class AddDeleElement {
    addOneElement() {
        cy.get(addedElement).should('not.exist')
        cy.get(addButton).click()
        cy.get(addedElement).should('be.visible')
    }
}

export default AddDeleElement;