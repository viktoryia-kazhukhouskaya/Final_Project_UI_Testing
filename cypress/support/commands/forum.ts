import { forumSelectors } from "../../selectors/forumSelectors";

const { forumLink, title } = forumSelectors;

Cypress.Commands.add("clickLink", (): void => {
    cy.get(forumLink).click();
});
Cypress.Commands.add("showTitle", (): void => {
    cy.get(title).should("be.visible");
});