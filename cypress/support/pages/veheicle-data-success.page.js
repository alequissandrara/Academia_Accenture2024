const BTN_NEXT = "#nextenterinsurantdata";
const BTN_ACESSA_AUTOMOBILE = "#nav_automobile";
const STATUS_ABA_INSURANT = "#enterinsurantdata";

const MAKE = "#make";
const FUEL_TYPE = "#fuel";
const LIST_PRICE = "#listprice";
const ANNUAL_MILEAGE = "#annualmileage";
const NUMBER_OF_SEATS = "#numberofseats";
const ENGINE_PERFORMANCE = "#engineperformance";
const DATE_OF_MANUFACTURE = "#dateofmanufacture";
const LICENSE_PLATE_NUMBER = "#licenseplatenumber";
const CLASS_CONFIRMACAO = ".idealsteps-nav li.idealsteps-step-active a";

Cypress.Commands.add("acessarAutomobile", () => {
  cy.get(BTN_ACESSA_AUTOMOBILE).click();
});

Cypress.Commands.add("preencherDadosAutomovel", () => {
  cy.get(MAKE).select(Cypress.env("make"));
  cy.get(ENGINE_PERFORMANCE).type(Cypress.env("enginePerformance"));
  cy.get(DATE_OF_MANUFACTURE).type(Cypress.env("dateOfManufacture"));
  cy.get(NUMBER_OF_SEATS).select(Cypress.env("numberOfSeats"));
  cy.get(FUEL_TYPE).select(Cypress.env("fuelType"));
  cy.get(LIST_PRICE).type(Cypress.env("listPrice"));
  cy.get(LICENSE_PLATE_NUMBER).type(Cypress.env("licensePlateNumber"));
  cy.get(ANNUAL_MILEAGE).type(Cypress.env("annualMileage"));
});

Cypress.Commands.add("acessarProximaAba", () => {
  cy.get(BTN_NEXT).click();
});

Cypress.Commands.add("AbaEnterInsurantData", () => {
  cy.get(STATUS_ABA_INSURANT).should("be.visible");
  cy.get(CLASS_CONFIRMACAO).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
