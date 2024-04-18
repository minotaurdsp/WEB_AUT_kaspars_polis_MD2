import Scene from "../pageObjects/Scene.page";

describe('Elements', () => {

  // 
  context("Start Scenario testing 1 and 2", () => {
    
    // open page
    beforeEach(() => {
      Scene.visit();
    })


    it('Scenario 1 - Make an Appointment', () => {

      // ii.  Click - Make Appointment
      Scene.clickAppointmentButton.click();

      // iii. Set username and password fields with the demo account credentials
      // iv.  Click - Login
      Scene.setCredentials();
      Scene.clickLoginButton.click();

      // v. Set the following values:
      Scene.fillFormAndSubmit();

      //vi. Validate that previously set values are correct
      Scene.validateResults() 
    })


    it('Scenario 2 - Appointment history empty', () => {
      // ii.  Click - Make Appointment
      Scene.clickAppointmentButton.click();

      // iii. Set username and password fields with the demo account credentials
      // iv.  Click - Login
      Scene.setCredentials();
      Scene.clickLoginButton.click();

      //  v. Click - Menu/Stack/Burger icon
      Scene.clickMenuBurgerIcon.click();

      //  vi. Validate that the sidebar is active
      //cy.get('#sidebar-wrapper').should('have.class', 'active');
      Scene.isSidebarOpen();
      
      //  vii. Click - History
      Scene.clickOnHistoryMenu.click();

      //  viii. Validate that - No appointment - is visible
      Scene.validateHistory();

    })

  })


})