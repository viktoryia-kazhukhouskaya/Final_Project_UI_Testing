import "./commands/loginAndRegistration";
import "./commands/basket";
import "./commands/forum";
import "./commands/baraholka";
import "./commands/cars";
import "./commands/passwordRecovery";
import "./commands/services";

require("@shelex/cypress-allure-plugin");

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
