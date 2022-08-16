import { expectedErrors } from "../../fixtures/expectedErrors";
import { inputLoginRegistrationValues } from "../../fixtures/inputLoginRegistrationValues";

const { сorrectEmail, correctPassword, inсorrectEmail, incorrectPassword } = inputLoginRegistrationValues;
const { incorrectLoginOrPassword, enterPassword, enterNicknameOrEmail, registrationWithoutCheckbox } = expectedErrors;

describe("Onliner.by testing - negative tests", () => {
    beforeEach("Open main page before each test", () => {
        cy.visit("/");
        cy.clickOnLoginButton();
    });
    it("Login without password", () => {
        cy.enterEmail(сorrectEmail);
        cy.clickLogin();
        cy.showError(enterPassword);
    });
    it("Login without email", () => {
        cy.enterPassword(correctPassword);
        cy.clickLogin();
        cy.showError(enterNicknameOrEmail);
    });
    it("Login with incorrect email and password", () => {
        cy.enterEmail(inсorrectEmail);
        cy.enterPassword(incorrectPassword);
        cy.clickLogin();
        cy.showError(incorrectLoginOrPassword);
    });
    it("Register without re-password", () => {
        cy.clickRegisterLink();
        cy.indicateEmail(сorrectEmail);
        cy.indicatePassword(correctPassword);
        cy.clickCheckbox();
        cy.clickRegister();
        cy.showError(enterPassword);
    });
    it("Register without checkbox and re-password", () => {
        cy.clickRegisterLink();
        cy.indicateEmail(сorrectEmail);
        cy.indicatePassword(correctPassword);
        cy.clickRegister();
        cy.indicateError(registrationWithoutCheckbox);
    });
    it("Register with email only", () => {
        cy.clickRegisterLink();
        cy.indicateEmail(сorrectEmail);
        cy.clickRegister();
        cy.indicateError(registrationWithoutCheckbox);
    });
    it("Register with empty fields and without checkbox", () => {
        cy.clickRegisterLink();
        cy.clickRegister();
        cy.indicateError(registrationWithoutCheckbox);
    });
});
