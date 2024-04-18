import Scene1 from "../pageObjects/Scene1.page";

describe('Elements', () => {

  // 
  context("Start Scenario testing 1 and 2", () => {
    
    // open page
    beforeEach(() => {
      Scene1.visit();
    })

    // Scenario 1 - Make an Appointment
    it('Scenario 1 - Make an Appointment', () => {

      // ii.  Click - Make Appointment
      Scene1.clickAppointmentButton.click();

      // iii. Set username and password fields with the demo account credentials
      // iv.  Click - Login
      Scene1.setCredentials();
      Scene1.clickLoginButton.click();

    
      // v. Set the following values:
      Scene1.fillFormAndSubmit();


      //vi. Validate that previously set values are correct
      Scene1.validateResults() 

    })

  })

})