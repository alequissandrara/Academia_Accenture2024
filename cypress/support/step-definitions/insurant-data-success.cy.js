import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When("preencho os seguintes campos com os dados do segurador:", () => {
  cy.preencherDadosSegurador();
});

And("clico em Next", () => {
  cy.acessarProximaAbaProduct();
});

Then("sou direcionada para a Aba Enter Product Data", () => {
  cy.abaEnterProductData();
});
