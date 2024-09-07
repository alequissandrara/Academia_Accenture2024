import faker from "faker-br";

/* Constantes da página de Veículo */
const BTN_NEXT_VEHICLE = "#nextenterinsurantdata";
const BTN_ACESSO_AUTOMOBILE = "#nav_automobile";
const STATUS_ABA_VEHICLE = "#enterinsurantdata";

const MAKE = "#make";
const FUEL_TYPE = "#fuel";
const LIST_PRICE = "#listprice";
const ANNUAL_MILEAGE = "#annualmileage";
const NUMBER_OF_SEATS = "#numberofseats";
const ENGINE_PERFORMANCE = "#engineperformance";
const DATE_OF_MANUFACTURE = "#dateofmanufacture";
const LICENSE_PLATE_NUMBER = "#licenseplatenumber";
const CLASS_CONFIRMACAO_VEHICLE = ".idealsteps-nav li.idealsteps-step-active a";

/* Constantes da página de Segurador */
const BTN_NEXT_INSURER = "#nextenterproductdata";
const STATUS_ABA_INSURER = "#enterproductdata";
const CLASS_CONFIRMACAO_INSURER = ".idealsteps-nav li.idealsteps-step-active a";

const CITY = "#city";
const WEBSITE = "#website";
const PICTURE = "#picture";
const COUNTRY = "#country";
const ZIP_CODE = "#zipcode";
const LAST_NAME = "#lastname";
const FIRST_NAME = "#firstname";
const BIRTH_DATE = "#birthdate";
const OCCUPATION = "#occupation";
const GENDER_FEMALE = "#genderfemale";
const STREET_ADDRESS = "#streetaddress";
const CHECKBOX_CLIFF_DIVING = 'input[type="checkbox"][value="CliffDiving"]';
const CHECKBOX_SPEEDING = 'input[type="checkbox"][value="Speeding"]';

/* Constantes da página de Produto */
const START_DATE = "#startdate";
const MERIT_RATING = "#meritrating";
const COURTESY_CAR = "#courtesycar";
const INSURANCE_SUM = "#insurancesum";
const BTN_NEXT_PRODUCT = "#nextselectpriceoption";
const DAMAGE_INSURANCE = "#damageinsurance";
const STATUS_ABA_PRICE_OPTION = "#selectpriceoption";
const CLASS_CONFIRMACAO_PRODUCT = ".idealsteps-nav li.idealsteps-step-active a";
const CHECK_EURO_PROTECTION = '#EuroProtection[type="checkbox"][value="Yes"]';
const DEFENSE_INSURANCE =
  '#LegalDefenseInsurance[type="checkbox"][value="Yes"]';

/* Função da página de Automóvel */
Cypress.Commands.add("acessarAutomobile", () => {
  cy.get(BTN_ACESSO_AUTOMOBILE).click();
});

Cypress.Commands.add("preencherDadosAutomovelError", () => {
  cy.get(MAKE).select(Cypress.env("make"));
  cy.get(ENGINE_PERFORMANCE).type(Cypress.env("enginePerformanceErro"));
  cy.get(DATE_OF_MANUFACTURE).type(Cypress.env("dateOfManufacture"));
  cy.get(NUMBER_OF_SEATS).select(Cypress.env("numberOfSeats"));
  cy.get(FUEL_TYPE).select(Cypress.env("fuelType"));
  cy.get(LIST_PRICE).type(Cypress.env("listPrice"));
  cy.get(LICENSE_PLATE_NUMBER).type(Cypress.env("licensePlateNumber"));
  cy.get(ANNUAL_MILEAGE).type(Cypress.env("annualMileage"));
});

Cypress.Commands.add("acessarProximaAbaVeiculo", () => {
  cy.get(BTN_NEXT_VEHICLE).click();
});

Cypress.Commands.add("verificarAbaEnterInsurantData", () => {
  cy.get(STATUS_ABA_VEHICLE).should("be.visible");
  cy.get(CLASS_CONFIRMACAO_VEHICLE).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});

/* Função da página de Segurador */
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeNumbers(str) {
  return str.replace(/\d+/g, "");
}

function generateUSZipCode() {
  const zip = faker.address.zipCode().replace(/\D/g, "");
  return zip.length === 5 ? zip : zip.substring(0, 5) + zip.substring(5, 9);
}

function removeAtSymbol(url) {
  return url.replace(/@/, "");
}

Cypress.Commands.add("preencherDadosSeguradorError", () => {
  const firstName = Cypress.env("firstNameErro");
  const lastName = removeAccents(faker.name.lastName());
  const dateOfBirth = faker.date
    .past(30, "2000-01-01")
    .toLocaleDateString("en-US");
  const rawStreetAddress = removeAccents(faker.address.streetAddress());
  const streetAddress = removeNumbers(rawStreetAddress);
  const country = Cypress.env("country");
  const zipCode = generateUSZipCode();
  const city = removeAccents(faker.address.city());
  const occupation = Cypress.env("occupation");
  const website = Cypress.env("websiteErro");
  const imageUrl = faker.image.avatar();

  cy.get(FIRST_NAME, { timeout: 10000 }).type(firstName);
  cy.get(LAST_NAME, { timeout: 10000 }).type(lastName);
  cy.get(BIRTH_DATE, { timeout: 10000 }).type(dateOfBirth);
  cy.get(GENDER_FEMALE, { timeout: 10000 }).check({ force: true });
  cy.get(STREET_ADDRESS, { timeout: 10000 }).type(streetAddress);
  cy.get(ZIP_CODE, { timeout: 10000 }).type(zipCode);
  cy.get(CITY, { timeout: 10000 }).type(city);
  cy.get(COUNTRY, { timeout: 10000 }).select(country);
  cy.get(OCCUPATION, { timeout: 10000 }).select(occupation);
  cy.get(CHECKBOX_CLIFF_DIVING).click({ force: true });
  cy.get(CHECKBOX_SPEEDING).click({ force: true });
  cy.get(WEBSITE, { timeout: 10000 }).type(website);
  cy.get(PICTURE).type(imageUrl);
});

Cypress.Commands.add("acessarProximaAbaSegurador", () => {
  cy.get(BTN_NEXT_INSURER).click({ force: true });
});

Cypress.Commands.add("verificarAbaEnterProductData", () => {
  cy.get(STATUS_ABA_INSURER).should("be.visible");
  cy.get(CLASS_CONFIRMACAO_INSURER).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});

/* Função da página de Produto */
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

Cypress.Commands.add("acessarProximaAbaProduto", () => {
  cy.get(BTN_NEXT_PRODUCT).click();
});

Cypress.Commands.add("verificarAbaSelectPriceOption", () => {
  cy.get(STATUS_ABA_PRICE_OPTION).should("be.visible");
  cy.get(CLASS_CONFIRMACAO_PRODUCT).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
