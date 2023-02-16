import HomePage from "../page-objects/homepage";
import BasicAuthPage from "../page-objects/basicAuthPage";
import FormPage from "../page-objects/formPage";
import KeyPressPage from "../page-objects/keyPress";
import AddDeleElement from "../page-objects/addDeleteElement";
import StatusCodesPage from "../page-objects/responseCode";

describe('Section 7 Homework', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    
    it('Basic Auth page tests', () => {
        const homePage = new HomePage();
        homePage.clickBasicAuthTab()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.sendEmptyInputs()
    })

    it('Form page test', () => {
        const homePage = new HomePage();
        homePage.clickFormTab()

        const formPage = new FormPage();
        formPage.sendCorrectForm()
    })
    it('Testing Key Press', () => {
        const homePage = new HomePage();
        homePage.clickKeyPressesTab()

        const keyPressPage = new KeyPressPage();
        keyPressPage.pressEnterOnTarget()
    })

    it('Check if element was added', () => {
        const homePage = new HomePage();
        homePage.clickAddRemoveElementsTab()

        const addRemovePage = new AddDeleElement();
        addRemovePage.addOneElement()
    })
    
    it('Check status code', () => {
        const homePage = new HomePage();
        homePage.clickStatusCodeHeader()

        const addRemovePage = new StatusCodesPage();
        addRemovePage.checkStatusCode200()
    })
})