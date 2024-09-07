const START_DATE = "#startdate";
const MERIT_RATING = "#meritrating";
const COURTESY_CAR = "#courtesycar";
const INSURANCE_SUM = "#insurancesum";
const BTN_NEXT = "#nextselectpriceoption";
const DAMAGE_INSURANCE = "#damageinsurance";
const STATUS_ABA_PRICE_OPTION = "#selectpriceoption";
const CLASS_CONFIRMACAO = ".idealsteps-nav li.idealsteps-step-active a";
const CHECK_EURO_PROTECTION = '#EuroProtection[type="checkbox"][value="Yes"]';
const DEFENSE_INSURANCE =
  '#LegalDefenseInsurance[type="checkbox"][value="Yes"]';

Cypress.Commands.add("visitEnterProductData", () => {
  cy.get(STATUS_ABA_PRICE_OPTION).should("be.visible");
});

Cypress.Commands.add("preencherDadosProduto", () => {
  cy.get(START_DATE).type("12/27/2026");
  cy.get(INSURANCE_SUM).select("7.000.000,00");
  cy.get(MERIT_RATING).select("Bonus 4");
  cy.get(DAMAGE_INSURANCE).select("Full Coverage");
  cy.get(CHECK_EURO_PROTECTION).click({
    force: true,
  });
  cy.get(DEFENSE_INSURANCE).click({
    force: true,
  });

  cy.get(COURTESY_CAR).select("Yes");
});

Cypress.Commands.add("acessarProximaAbaPriceOption", () => {
  cy.get(BTN_NEXT).click();
});

Cypress.Commands.add("AbaSelectPriceOption", () => {
  cy.get(STATUS_ABA_PRICE_OPTION).should("be.visible");
  cy.get(CLASS_CONFIRMACAO).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
