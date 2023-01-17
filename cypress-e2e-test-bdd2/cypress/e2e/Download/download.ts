import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When('I download the yaml file from learning container', () => {
    cy.intercept('GET', 'url').as('download')
    cy.visit('https://file-examples.com/index.php/sample-documents-download/sample-xls-download/')
    cy.contains('tr', 'Download sample xlsx file').eq(1).click();
    cy.wait(2000);
})

Then('I should be able to validate the file contains {string}', (text) => {
    cy.task('isFileDownloadedWith', text).should('equal', true);

    // cy.request('https://www.learningcontainer.com/download/sample-yaml-file-for-download/?wpdmdl=1747&refresh=60746c862b0961618242694').then((response) => {
    //     expect(response.status).to.equal(200);
    //     expect(response.body).not.to.null;
    // });
})
