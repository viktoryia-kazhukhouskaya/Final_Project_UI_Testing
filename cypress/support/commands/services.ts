import { servicesSelectors } from "../../selectors/servicesSelectors";

const { findMaster, title } = servicesSelectors;

Cypress.Commands.add("clickFindMaster", (): void => {
    cy.get(findMaster).click();
});
Cypress.Commands.add("displayTitle", (): void => {
    cy.get(title).should("be.visible");
});