import faker from "faker-br";

const BTN_NEXT_PRODUCT = "#nextenterproductdata";
const STATUS_ABA_PRODUCT = "#enterproductdata";

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

  cy.get("#firstname", { timeout: 10000 }).type(firstName);
  cy.get("#lastname", { timeout: 10000 }).type(lastName);
  cy.get("#birthdate", { timeout: 10000 }).type(dateOfBirth);
  cy.get("#genderfemale", { timeout: 10000 }).check({ force: true });
  cy.get("#streetaddress", { timeout: 10000 }).type(streetAddress);
  cy.get("#zipcode", { timeout: 10000 }).type(zipCode);
  cy.get("#city", { timeout: 10000 }).type(city);
  cy.get("#country", { timeout: 10000 }).select(country);
  cy.get("#occupation", { timeout: 10000 }).select(occupation);
  cy.get('input[type="checkbox"][value="CliffDiving"]').click({ force: true });
  cy.get('input[type="checkbox"][value="Speeding"]').click({ force: true });
  cy.get("#website", { timeout: 10000 }).type(website);
  cy.get("#picture").type(imageUrl);
});

Cypress.Commands.add("acessarProximaAbaProduct", () => {
  cy.get(BTN_NEXT_PRODUCT).click({ force: true });
});

Cypress.Commands.add("AbaEnterProductData", () => {
  cy.get(STATUS_ABA_PRODUCT).should("be.visible");
  cy.get(".idealsteps-nav li.idealsteps-step-active a").should(
    "have.css",
    "background-color",
    "rgb(249, 249, 248)"
  );
});
