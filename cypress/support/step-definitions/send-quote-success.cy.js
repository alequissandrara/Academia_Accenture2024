import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When("preencho os seguintes campos com meus dados válidos:", () => {
  cy.preencherDadosCotacao();
});

And("clico em Send", () => {
  cy.enviarCotacao();
});

Then("recebo uma mensagem de confirmação de envio", () => {
  cy.confirmacaoEnvio();
});
