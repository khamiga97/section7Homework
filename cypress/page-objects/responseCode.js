const statusCode200 = 'a[href="http://httpstat.us/200"]'

class StatusCodesPage{
    checkStatusCode200() {
    cy.get(statusCode200).click()
    cy.request(statusCode200).then((response) => {
        const body=JSON.stringify(response.body)   
        expect (response.status).to.eq(200)
    }
)}

}
export default StatusCodesPage