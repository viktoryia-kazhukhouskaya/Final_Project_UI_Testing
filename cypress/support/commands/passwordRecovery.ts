import { passwordRecoverySelectors } from "../../selectors/passwordRecoverySelectors";

const { recoveryLink, recoveryWindow } = passwordRecoverySelectors;

Cypress.Commands.add("clickRecoveryLink", (): void => {
    cy.get(recoveryLink).click();
});
Cypress.Commands.add("showRecoveryWindow", (): void => {
    cy.get(recoveryWindow).should("be.visible");
});