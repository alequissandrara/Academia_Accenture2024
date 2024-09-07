import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

And("preencho os seguintes campos com os dados do automóvel com error:", () => {
  cy.preencherDadosAutomovelError();
});

And("preencho os seguintes campos com os dados do segurador com error:", () => {
  cy.preencherDadosSeguradorError();
});

When("preencho os seguintes campos com os dados do produto:", () => {
  cy.preencherDadosProduto();
});

And("clico em Next", () => {
  cy.acessarProximaAbaPriceOption();
});

Then("sou direcionada para a Aba Enter Select Price Option", () => {
  cy.AbaSelectPriceOption();
});
