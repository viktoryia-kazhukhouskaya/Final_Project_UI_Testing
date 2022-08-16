import { basketSelectors } from "../../selectors/basketSelectors";

const { basketLink, cartImage  } = basketSelectors;

Cypress.Commands.add("clickBasket", (): void => {
    cy.get(basketLink).click();
});
Cypress.Commands.add("openCartImage", (): void => {
    cy.get(cartImage).should("be.visible");
});