import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("que acesso o site da Tricentis", () => {
  cy.visit("/");
});

And("clico na opção Automobile", () => {
  cy.acessarAutomobile();
});

When("preencho os seguintes campos com os dados do automóvel:", () => {
  cy.preencherDadosAutomovel();
});

And("clico em Next", () => {
  cy.acessarProximaAba();
});

Then("sou direcionada para a próxima Aba", () => {
  cy.AbaEnterInsurantData();
});
