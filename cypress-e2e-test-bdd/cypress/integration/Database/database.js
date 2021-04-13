import { Then } from "cypress-cucumber-preprocessor/steps";

Then('I can run a database query to retrieve data', (text) => {
    /* CREATE TABLE cypress_db (id integer, active boolean, description varchar(24));
INSERT INTO cypress_db VALUES (1, true, 'my first result');
drop table cypress_db */
    let sql = 'SELECT * FROM cypress_db'
    cy.task('runDBQuery', sql).should('equal', true);
})
