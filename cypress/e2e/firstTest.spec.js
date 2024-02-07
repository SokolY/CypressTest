/// <reference types="cypress"/>


// const { find } = require("core-js/core/array");

describe("My first test suite", () => {

    it("first test", () => {
        cy.visit("/");
        cy.contains("Forms").click();
        cy.contains("Form Layouts").click();

        cy.get("input"); //TagName

        cy.get("#inputEmail1"); //id
        cy.get(".shape-rectangle"); //classn
        ame
        cy.get("[placeholder]"); //attrubute
        cy.get('[placeholder="Email"]');
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        cy.get('[type="submit"]');
    })

    it('Element locator', () => {
        cy.visit('pages/forms/layouts');
        cy.get('input#exampleInputEmail1').type('test');
        cy.get('.input-full-width');
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        cy.get('div > input[placeholder="Email"]#exampleInputEmail1').clear().type('test2');
        cy.get('input[nbinput=""][type="email"]')
    })

    it('Parent search', () => {
        cy.visit('pages/forms/layouts');
        cy.contains('[status="warning"]', "Sign in");
        cy.get('#inputWebsite').parents('nb-card').find('[type="submit"]');
        cy.get('#inputWebsite')
            .parents('nb-card')
            .find('button')
            .should('have.text', 'Submit');

        cy.get('#exampleInputPassword1')
            .parents('form')
            .find('.appearance-filled')
            .should('contain', 'Submit').
            parents('form').
            find('[class="custom-checkbox"]').click();

        cy.contains('nb-card', 'Basic form').find('button');


    })

    it("Text compering", () => {
        cy.visit('pages/forms/layouts');
        // cy.contains('nb-card', 'Horizontal form').find('[for="inputEmail3"]').should('have.text', 'Email');
        // cy.contains('nb-card', 'Block form').find('[for="inputEmail"]').should('have.text', 'Email');

        // const FirstForm = cy.contains('nb-card', 'Horizontal form');
        // const SecondForm = cy.contains('nb-card', 'Block form');

        // FirstForm.find('[for="inputEmail3"]').should('have.text', 'Email');
        // SecondForm.find('[for="inputEmail"]').should('have.text', 'Email');

        cy.contains('nb-card', 'Horizontal form').then(firstF => {
            const emailText1 = firstF.find('[for="inputEmail3"]').text();
            expect(emailText1).to.equals("Email");

            cy.contains('nb-card', 'Block form').then(secondF => {
                const emailText2 = secondF.find('[for="inputFirstName"]').text();

                expect(emailText1).to.equal(emailText2);
            })

        })


    })
    // it("second test ", () =>{
    //     cy.contains("nb-card","Using the Grid").
    //     find('[type="submit"]')
    //     .should("contain", "Sign in");
    // })
    // it("third test ", () =>{

    //     // cy.contains('[ng-reflect-status="warning"]', "Sign in");
    //     cy.get('[placeholder="Website"]').parents("nb-card-body").find('[type="submit"]');
    // })
    it("fourth test (then and wrap", () => {
        // cy.contains("nb-card", "Basic form").find('[class="nb-checkbox"]').click();

        cy.contains("nb-card", "Basic form").find('[for="exampleInputPassword1"]').should("contain", "Password");
        cy.contains("nb-card", "Basic form").find('[for="exampleInputEmail1"]').should("contain", "Email address");
        //for="inputEmail1"
        // cy.contains("nb-card", "Using the Grid").find('[for="inputEmail1"]').should("contain","Email");
        // //for="inputPassword2"
        // cy.contains("nb-card", "Using the Grid").find('[for="inputPassword2"]').should("contain","Password");

        cy.contains("nb-card", "Using the Grid").then(firstForm => {
            const EmailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const PassLabelFirst = firstForm.find('[for="inputPassword2"]').text();
            expect(EmailLabelFirst).to.equal("Email");
            expect(PassLabelFirst).to.equal("Password");

            cy.contains("nb-card", "Basic form").then(secondForm => {
                const EmailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text();
                const PassLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(EmailLabelSecond).to.equal("Email address");
                expect(PassLabelSecond).to.equal("Password");
                cy.wrap(secondForm);

            })

        })
    })

    it('then and wrap functiom', () => {
        cy.visit('pages/forms/layouts');
        // cy.contains('nb-card', 'Horizontal form').find('[for="inputEmail3"]');
        // cy.contains('nb-card', 'Horizontal form').find('[for="inputPassword3"]');

        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]');
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]');

        cy.contains('nb-card', 'Horizontal form').then(horizontForm => {
            const passwordLabel1 = horizontForm.find('[for="inputPassword3"]').text();

            expect(passwordLabel1).to.equal('Password')
            cy.contains('nb-card', 'Basic form').then(basicForm => {
                const passwordLabel2 = basicForm.find('[for="exampleInputPassword1"]').text();

                expect(passwordLabel1).to.equal(passwordLabel2);

                cy.wrap(basicForm).find('[for="exampleInputEmail1"]').should('contain.text', 'address');
            })

        })

    })

    it("Invoke method", () => {
        cy.visit('pages/forms/layouts');
        cy.get('[for="exampleInputPassword1"]').invoke('text').then(text => {
            expect(text).to.equal("Password");
        })

        cy.contains('nb-card', "Horizontal form")
            .find('.custom-checkbox')
            .click()
            .invoke("attr", "class").should("contain", 'checked');
    })

    it('invoke part 2', () => {
        cy.visit('pages/forms/datepicker');
        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then(label => {
                cy.wrap(label).click();
                cy.get('nb-base-calendar nb-calendar-day-cell').contains('27').click();
                cy.get(label).invoke('prop', 'value').should("contain", "Jun 27, 2023");
            })
    })

    it("checkbox, radiobutton", () => {
        cy.visit('pages/forms/layouts');
        // cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').first().check({force:true});
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(1).check({ force: true });
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(2).check({ force: true }).should('be.checked');
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(2).invoke('attr', 'type').then(value => {
            expect(value).to.equal('radio');
        })
        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').eq(2).should('be.disabled');

        cy.visit('pages/modal-overlays/toastr');
        cy.contains('nb-card', 'Toaster configuration').find('.custom-checkbox').then(checkBoxes => {
            cy.wrap(checkBoxes).eq(0).click({ force: true })
                .should('not.be.checked');

            cy.wrap(checkBoxes).eq(2).click({ force: true })
                .should('not.be.checked');

        })

    })

    it("dropDown test", () => {
        cy.visit("/");
        cy.get('div nb-select').click();
        cy.get('[class="options-list"]').contains('Dark').click();
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)');

        cy.get('div [class="select-button"]').then((dropdown) => {
            cy.get(dropdown).click();
            const colors = {
                "Light": "rgb(255, 255, 255)",
                "Dark": "rgb(34, 43, 69)",
                "Cosmic": "rgb(50, 50, 89)",
                "Corporate": "rgb(255, 255, 255)",
            }
            cy.get('ul nb-option').each((dropDownItem, index) => {
                const colorText = dropDownItem.text().trim();
                cy.get(dropDownItem).click();
                cy.get('nb-select [class="select-button"]').should('contain.text', colorText);
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[colorText]);
                if (index < 3) {
                    cy.wrap(dropdown).click();
                }

            })

        })


    })
    it.only("Work with tables", () => {
        cy.visit('pages/tables/smart-table');
        cy.get("tbody").contains("tr", "Ann").then(tableRow => {
            cy.wrap(tableRow).find('[class="nb-edit"]').click();
            cy.wrap(tableRow).find('[ng-reflect-name="age"]').clear().type(35);
            cy.wrap(tableRow).find('.nb-checkmark').click();
            // cy.wrap(tableRow).find('[ng-reflect-name="age"]').should('contain.text', '35');
            cy.wrap(tableRow).find('td').eq(6).should('contain.text', '35');
        })

        cy.get('[class="nb-plus"]').click();
        cy.get('thead tr').eq(2).then(newRow => {
            cy.wrap(newRow).find('[placeholder="First Name"]').type('Yurii');
            cy.wrap(newRow).find('[ng-reflect-name="email"]').type('yura.sokol@gmail.com');
            cy.wrap(newRow).find('.ng2-smart-action-add-create').click();
        })

        cy.get('tbody tr').first().then(firstRow => {
            cy.wrap(firstRow).get('td').eq(2).should('have.text', 'Yurii');
        })

        cy.get('thead tr').eq(1).find('.age').type('28');
        cy.wait(500);
        cy.get('tbody tr').each(row => {
            cy.wrap(row).find('td').eq(6).should('contain.text', '28');
        });


        const ages = [28, 20, 40, 101];

        cy.wrap(ages).each(age => {
            cy.get('thead tr').eq(1).find('.age').clear().type(age);
            cy.wait(500);
            if (age < 100) {
                cy.get('tbody tr').each(row => {
                    cy.wrap(row).find('td').eq(6).should('contain.text', age);
                });
            }
            else {
                cy.get('tbody td').should('have.text', 'No data found')
            }
        })
    })
})



describe("My second suite", () => {
    it("first test from the second suite", () => {

    })

    it("second test from the second suite", () => {

    })
    
}) 