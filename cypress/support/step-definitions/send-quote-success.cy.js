import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("preencho os seguintes campos com meus dados válidos:", () => {
  cy.preencherDadosCotacao();
});

Then("clico em Send confirmando o envio do form", () => {
  cy.enviarCotacao();
});
