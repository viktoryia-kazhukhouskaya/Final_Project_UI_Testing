import { inputLoginRegistrationValues } from "../../fixtures/inputLoginRegistrationValues";

const { сorrectEmail, correctPassword } = inputLoginRegistrationValues;

describe("Onliner.by testing - positive tests", () => {
    beforeEach("Open main page before each test", () => {
        cy.visit("/");
    });
    it("Login with correct credentials", () => {
        cy.clickOnLoginButton();
        cy.enterEmail(сorrectEmail);
        cy.enterPassword(correctPassword);
        cy.clickLogin();
        cy.displayPicture();
    });
    it("Check Shopping cart", () => {
        cy.clickBasket();
        cy.openCartImage();
    });
    it("Recover account password", () => {
        cy.clickOnLoginButton();
        cy.clickRecoveryLink();
        cy.showRecoveryWindow();
    });
    it("Check forum", () => {
        cy.clickLink();
        cy.showTitle();
    });
    it("Check baraholka", () => {
        cy.clickBaraholka();
        cy.clickAdButton();
        cy.showLoginForm();
    });
    it("Check current vehicles", () => {
        cy.clickCars();
        cy.showActualCars();
    });
    it("Order services", () => {
        cy.clickFindMaster();
        cy.displayTitle();
    });
});