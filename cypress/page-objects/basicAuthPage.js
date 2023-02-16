const usernameField = 'input[id="ba_username"]'
const passwordField = 'input[id="ba_password"]'
const loginButton = 'button[onclick="onLoginSubmit()"]'
const errorMessage = '#loginFormMessage'

class BasicAuthPage {

    sendEmptyInputs() {
        cy.get(usernameField).clear()
        cy.get(passwordField).clear()
        cy.get(loginButton).click()
        cy.get(errorMessage).should('be.visible')
    }
}

export default BasicAuthPage;