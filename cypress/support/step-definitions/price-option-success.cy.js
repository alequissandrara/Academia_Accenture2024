import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When("seleciono a opção Ultimate na aba Select Price Option", () => {
  cy.selecionarUtimate();
});

And("clico em Next", () => {
  cy.acessarProximaAbaSendQuote();
});

Then("sou direcionada para a Aba Send Quote", () => {
  cy.AbaSendQuote();
});
