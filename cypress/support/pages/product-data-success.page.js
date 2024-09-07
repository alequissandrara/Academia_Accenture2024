const BTN_NEXT = "#nextselectpriceoption";
const START_DATE = "#startdate";
const INSURANCE_SUM = "#insurancesum";
const MERIT_RATING = "#meritrating";
const DAMAGE_INSURANCE = "#damageinsurance";
const COURTESY_CAR = "#courtesycar";
const STATUS_ABA_PRICE_OPTION = "#selectpriceoption";

Cypress.Commands.add("visitEnterProductData", () => {
  cy.get(STATUS_ABA_PRICE_OPTION).should("be.visible");
});

Cypress.Commands.add("preencherDadosProduto", () => {
  cy.get(START_DATE).type("12/27/2026");
  cy.get(INSURANCE_SUM).select("7.000.000,00");
  cy.get(MERIT_RATING).select("Bonus 4");
  cy.get(DAMAGE_INSURANCE).select("Full Coverage");
  cy.get('#EuroProtection[type="checkbox"][value="Yes"]').click({
    force: true,
  });
  cy.get('#LegalDefenseInsurance[type="checkbox"][value="Yes"]').click({
    force: true,
  });

  cy.get(COURTESY_CAR).select("Yes");
});

Cypress.Commands.add("acessarProximaAbaPriceOption", () => {
  cy.get(BTN_NEXT).click();
});

Cypress.Commands.add("AbaSelectPriceOption", () => {
  cy.get(STATUS_ABA_PRICE_OPTION).should("be.visible");
  cy.get(".idealsteps-nav li.idealsteps-step-active a").should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
