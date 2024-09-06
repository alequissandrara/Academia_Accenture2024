import { When } from "cypress-cucumber-preprocessor/steps";

When("preencho os seguintes campos com os dados do segurador:", () => {
  cy.preencherDadosSegurador();
});
