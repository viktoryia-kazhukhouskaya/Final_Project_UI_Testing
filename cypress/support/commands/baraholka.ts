import { baraholkaSelectors } from "../../selectors/baraholkaSelectors";

const { baraholkaLink, adButton, loginForm } = baraholkaSelectors;

Cypress.Commands.add("clickBaraholka", (): void => {
    cy.get(baraholkaLink).click();
});
Cypress.Commands.add("clickAdButton", (): void => {
    cy.get(adButton).click();
});
Cypress.Commands.add("showLoginForm", (): void => {
    cy.get(loginForm).should("be.visible");
});