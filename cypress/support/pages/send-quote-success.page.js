const EMAIL = "#email";
const PHONE = "#phone";
const USERNAME = "#username";
const PASSWORD = "#password";
const CONFIRM_PASSWORD = "#confirmpassword";
const COMMENTS = "#Comments";
const ENV_COTACAO = 'button[id="sendemail"]';

Cypress.Commands.add("preencherDadosCotacao", () => {
  cy.get(EMAIL).type(Cypress.env("email"));
  cy.get(PHONE).type(Cypress.env("phone"));
  cy.get(USERNAME).type(Cypress.env("username"));
  cy.get(PASSWORD).type(Cypress.env("password"));
  cy.get(CONFIRM_PASSWORD).type(Cypress.env("confirmPassword"));
  cy.get(COMMENTS).type(Cypress.env("comments"));
});

Cypress.Commands.add("enviarCotacao", () => {
  cy.get(ENV_COTACAO).click();
});
