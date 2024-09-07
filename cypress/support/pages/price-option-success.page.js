const STATUS_ABA_PRODUCT = "#enterproductdata";
const BTN_NEXT_PRICE_OPTION = "#nextselectpriceoption";
const ULTIMATE_OPTION = 'input[type="radio"][value="Ultimate"]';
const CLASS_CONFIRMACAO = ".idealsteps-nav li.idealsteps-step-active a";

Cypress.Commands.add("selecionarUtimate", () => {
  cy.get(ULTIMATE_OPTION).check({ force: true });
});

Cypress.Commands.add("acessarProximaAbaSendQuote", () => {
  cy.get(BTN_NEXT_PRICE_OPTION).click();
});

Cypress.Commands.add("AbaSendQuote", () => {
  cy.get(STATUS_ABA_PRODUCT).should("be.visible");
  cy.get(CLASS_CONFIRMACAO).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
