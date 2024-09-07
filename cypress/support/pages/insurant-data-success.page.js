import faker from "faker-br";

const BTN_NEXT_PRODUCT = "#nextenterproductdata";
const STATUS_ABA_PRODUCT = "#enterproductdata";
const CLASS_CONFIRMACAO = ".idealsteps-nav li.idealsteps-step-active a";

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

Cypress.Commands.add("preencherDadosSegurador", () => {
  const firstName = removeAccents(faker.name.firstName());
  const lastName = removeAccents(faker.name.lastName());
  const dateOfBirth = faker.date
    .past(30, "2000-01-01")
    .toLocaleDateString("en-US");
  const rawStreetAddress = removeAccents(faker.address.streetAddress());
  const streetAddress = removeNumbers(rawStreetAddress);
  const country = Cypress.env("country");
  const zipCode = generateUSZipCode();
  const city = removeAccents(faker.address.city());
  const occupation = removeAccents(Cypress.env("occupation"));
  const website = removeAtSymbol(faker.internet.url());
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

Cypress.Commands.add("acessarProximaAbaProduct", () => {
  cy.get(BTN_NEXT_PRODUCT).click({ force: true });
});

Cypress.Commands.add("AbaEnterProductData", () => {
  cy.get(STATUS_ABA_PRODUCT).should("be.visible");
  cy.get(CLASS_CONFIRMACAO).should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
