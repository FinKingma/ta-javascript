context('UI Test automation playground', () => {

    xit('Dynamic ID', () => {
        cy.visit('http://uitestingplayground.com/dynamicid')
        cy.get('.btn-primary').click()
    })

    xit('AJAX Data', () => {
        cy.visit('http://uitestingplayground.com/ajax')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success', { timeout: 30000 }).should('have.text', 'Data loaded with AJAX get request.')
    })

    xit('Scrollbars', () => {
        cy.visit('http://uitestingplayground.com/scrollbars')
        cy.get('#hidingButton').click()
    })

    xit('Visibility', () => {
        cy.visit('http://uitestingplayground.com/visibility')
        cy.get('#hideButton').click()
        cy.get('#removedButton').should('not.exist');
        cy.get('#zeroWidthButton').should('not.be.visible');

        let initialPosition;
        cy.get('#overlappedButton').then(($button) => { initialPosition = $button.position(); });
        cy.get('#hidingLayer').should(($button) => { expect($button.position()).deep.equal(initialPosition) })

        cy.get('#transparentButton').should('not.be.visible');
        cy.get('#invisibleButton').should('not.be.visible');
        cy.get('#notdisplayedButton').should('not.be.visible');

        // manually test for whether elem is out of viewport
        cy.get("#offscreenButton").first().then($el => {
            const rect = $el[0].getBoundingClientRect();

            expect(rect.top).to.be.lessThan(0);
            expect(rect.bottom).to.be.lessThan(0);
        });
    })

    xit('Class Attribute', () => {
        cy.visit('http://uitestingplayground.com/classattr')
        cy.get('.btn-primary').click()
        cy.on('window:confirm', () => true);
    })

    xit('Client Side Delay', () => {
        cy.visit('http://uitestingplayground.com/clientdelay')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success', { timeout: 30000 }).should('have.text', 'Data calculated on the client side.')
        cy.get('.bg-success').click()
    })

    xit('Dynamic Table', () => {
        cy.visit('http://uitestingplayground.com/dynamictable')
        let chromePercentage
        cy.get('div[role="table"]').contains('div[role="row"]', 'Chrome').contains('span[role="cell"]', '%').then(($el) => {
            expect($el, 'text content').to.contain.text('%')
            cy.get('.bg-warning').should('contain', $el.text())
        })
    })

    xit('Sample App', () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
        cy.get('input[name="UserName"]').type('Fin')
        cy.get('input[name="Password"]').type('pwd')
        cy.get('#login').click()
        cy.get('#loginstatus').should('contain', 'Welcome, Fin!')
    })

    xit('Hidden Layers', (done) => {
        cy.visit('http://uitestingplayground.com/hiddenlayers')
        cy.get('#greenButton').click();
        cy.get('#blueButton').should('be.visible')

        cy.once('fail', (err) => {
            expect(err.message).to.include('is being covered by another element');

            done();
        });

        cy.get('#greenButton').click().then(x => {
            done(new Error('Expected button NOT to be clickable, but click() succeeded'));
        })
    })

    xit('Click', () => {
        cy.visit('http://uitestingplayground.com/click')
        cy.get('#badButton').click()
        cy.get('#badButton').should('have.class', 'btn-success')
    })

    xit('Verify Text', () => {
        cy.visit('http://uitestingplayground.com/verifytext')
        cy.get('.bg-primary').contains('Welcome UserName!').should('exist')
    })

    xit('Mouse Over', () => {
        cy.visit('http://uitestingplayground.com/mouseover')
        cy.contains('a', 'Click me').click()
        cy.contains('a', 'Click me').click()
        cy.get('#clickCount').should('have.text', '2')
    })

    xit('Load Delays', () => {
        cy.visit('http://uitestingplayground.com/loaddelay')
        cy.get('.btn-primary').click()
    })

    xit('Text input', () => {
        cy.visit('http://uitestingplayground.com/textinput')
        cy.get('#newButtonName').type('SPARTAA')
        cy.get('#updatingButton').click()
        cy.get('#updatingButton').should('have.text', 'SPARTAA')
    })

    xit('Progress Bar', () => {
        cy.visit('http://uitestingplayground.com/progressbar')
        cy.get('#startButton').click()
        cy.get('#progressBar').contains('75%', { timeout: 30000 })
        cy.get('#stopButton').click()
    })

    it('Non-Breaking Space', () => {
        cy.visit('http://uitestingplayground.com/nbsp')
        cy.contains('button', 'My Button').click()
    })
})