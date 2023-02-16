const firstNameField = '#fname'
const lastNameField = '#lname'
const submitButton = '#formSubmitButton'

class FormPage {

    sendCorrectForm() {
        cy.get(firstNameField).type('Kamil')
        cy.get(lastNameField).type('Test')
        cy.get(submitButton).click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('success')
        })
    }
}

export default FormPage;