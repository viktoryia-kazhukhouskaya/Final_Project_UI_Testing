import { vehicleSelectors } from "../../selectors/vehicleSelectors";

const { carsLink, adButton  } = vehicleSelectors;

Cypress.Commands.add("clickCars", (): void => {
    cy.get(carsLink).click();
});
Cypress.Commands.add("showActualCars", (): void => {
    cy.get(adButton).should("be.visible");
});