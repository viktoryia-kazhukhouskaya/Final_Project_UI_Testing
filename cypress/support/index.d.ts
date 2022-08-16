declare namespace Cypress {
    interface Chainable {

        clickOnLoginButton(): void;

        enterEmail(email: string): void;

        clickLogin(): void;

        showError(error: string): void;

        enterPassword(password: string): void;

        clickRegisterLink(): void;

        indicateEmail(login: string): void;

        indicatePassword(password: string): void;

        clickCheckbox(): void;

        clickRegister(): void;

        indicateError(error: string): void;

        clickRecaptchaCheckbox(): void;

        displayPicture(): void;

        clickBasket(): void;

        openCartImage(): void;

        clickLink(): void;

        showTitle(): void;

        clickBaraholka(): void;

        clickAdButton(): void;

        showLoginForm(): void;

        clickCars(): void;

        showActualCars(): void;

        clickRecoveryLink(): void;

        showRecoveryWindow(): void;

        clickFindMaster(): void;

        displayTitle(): void;

    }
}
