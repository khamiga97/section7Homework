/// <reference types="Cypress" />

import Urls from "./urls";

const basicAuthHeader = '#basicauth-header'
const formHeader = '#form-header'
const keyPressesHeader = '#keypresses-header'
const addRemoveElementsHeader = '#addremoveelements-header'
const statusCodesHeader = '#statuscodes-header'

class HomePage {

    clickBasicAuthTab() {
        cy.get(basicAuthHeader).click()
    }
    clickFormTab() {
        cy.get(formHeader).click()
    }
    clickKeyPressesTab() {
        cy.get(keyPressesHeader).click()
    }
    clickAddRemoveElementsTab() {
        cy.get(addRemoveElementsHeader).click()
    }
    clickStatusCodeHeader() {
        cy.get(statusCodesHeader).click()
    }
    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }
    
}
export default HomePage;