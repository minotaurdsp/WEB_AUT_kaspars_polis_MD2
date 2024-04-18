import BasePage from "./base.page";

class Scene1 extends BasePage {
    
  
    

    // Click - Make Appointment
    static get clickAppointmentButton() {
        return cy.get("#btn-make-appointment");
    }

    // iii. Set username and password fields with the demo account credentials
    static setCredentials() {  
        cy.get('[name=username]').type('John Doe');
        cy.get('[name=username]').invoke('val').should('equal', 'John Doe')

        cy.get('[name=password]').type('ThisIsNotAPassword');
        cy.get('[name=password]').invoke('val').should('equal', 'ThisIsNotAPassword') 
    };

    // iv.  Click - Login
    static get clickLoginButton() {
        return cy.get("#btn-login");
    }

    static fillFormAndSubmit() {
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center') 

        // 2. Check - Apply for hospital readmission
        cy.get('#chk_hospotal_readmission').check()


        // 3. Select - Medicaid
        cy.get('#radio_program_medicaid').check()
        

        // 4. Set Date value by using the widget - 30
        cy.get('#txt_visit_date').click();
        cy.get("div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(3)").click();
        // 
        
        // 5. Set comment - CURA Healthcare Service
        cy.get('#txt_comment').type('CURA Healthcare Service');

        // 6. Click - Book Appointment
        cy.get('#btn-book-appointment').click();
    }

    static  validateResults() {
        cy.get('#summary > div > div > div.col-xs-12.text-center > h2').contains('Appointment Confirmation')
        cy.get('#facility').contains('Seoul CURA Healthcare Center')
        cy.get('#hospital_readmission').contains('Yes')
        cy.get('#visit_date').contains('30')
        cy.get('#comment').contains('CURA Healthcare Service')
    }

  
}
  
export default Scene1;