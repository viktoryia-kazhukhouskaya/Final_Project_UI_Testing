import { loginSelectors } from "../../selectors/loginSelectors";
import { registrationSelectors } from "../../selectors/registrationSelectors";
import { inputLoginRegistrationValues } from "../../fixtures/inputLoginRegistrationValues";

const { loginButton, loginEmail, loginPassword, login, dataError, securityWindow  } = loginSelectors;
const  { registrationLink, email, createPassword, checkbox, register, registrationWithoutCheckbox } = registrationSelectors;

Cypress.Commands.add("clickOnLoginButton", (): void => {
    cy.get(loginButton).click();
});
Cypress.Commands.add("enterEmail", (email: string): void => {
    cy.get(loginEmail).type(email).should("have.value", email);
});
Cypress.Commands.add("clickLogin", (): void => {
    cy.get(login).click();
});
Cypress.Commands.add("showError", (error: string): void => {
    cy.get(dataError).should("be.visible");
});
Cypress.Commands.add("enterPassword", (password: string): void => {
    cy.get(loginPassword).type(password).should("have.value", password);
});
Cypress.Commands.add("clickRegisterLink", (): void => {
    cy.get(registrationLink).click();
});
Cypress.Commands.add("indicateEmail", (login: string): void => {
    cy.get(email).type(login).should("have.value", login);
});
Cypress.Commands.add("indicatePassword", (password: string): void => {
    cy.get(createPassword).type(password).should("have.value", password);
});
Cypress.Commands.add("clickCheckbox", (): void => {
    cy.get(checkbox).click();
});
Cypress.Commands.add("clickRegister", (): void => {
    cy.get(register).click();
});
Cypress.Commands.add("indicateError", (error: string): void => {
    cy.get(registrationWithoutCheckbox).should("be.visible");
});
Cypress.Commands.add("displayPicture", (): void => {
    cy.get(securityWindow).should("be.visible");
});