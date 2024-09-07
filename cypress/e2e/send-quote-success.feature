#utf-8
#language: pt

Funcionalidade: Inserção dos dados para envio de cotação
Cenário: Envio de cotação com dados válidos

Dado que acesso o site da Tricentis
E clico na opção Automobile
E preencho os seguintes campos com os dados do automóvel:
  | Campo                    | Valor         |
  | Make                     | BMW           |
  | Engine Performance [kW]   | 200           |
  | Date of Manufacture       | 01/01/2022    |
  | Number of Seats           | 4             |
  | Fuel Type                 | Gas           |
  | List Price [$]            | 30,000        |
  | License Plate Number      | ABC1234       |
  | Annual Mileage [mi]       | 15000         |
E clico em Next
E sou direcionada para a próxima Aba
E preencho os seguintes campos com os dados do segurador:
  | Campo              | Valor                  |
  | First Name         | Gerado automaticamente  |
  | Last Name          | Gerado automaticamente  |
  | Date of Birth      | Gerado automaticamente  |
  | Gender             | Male ou Female         |
  | Street Address     | Gerado automaticamente  |
  | Country            | Brazil                 |
  | Zip Code           | Gerado automaticamente  |
  | City               | Gerado automaticamente  |
  | Occupation         | Gerado automaticamente  |
  | Hobbies            | Speeding, Bungee Jumping, Cliff Diving, Skydiving, Other |
  | Website            | Gerado automaticamente  |
  | Picture            | Nenhum ficheiro selecionado |
E clico em Next
E sou direcionada para a Aba Enter Product Data
E preencho os seguintes campos com os dados do produto:
  | Campo             | Valor                |
  | Start Date        | 12/31/2023           |
  | Insurance Sum     | 3,000,000            |
  | Merit Rating      | Bonus 4              |
  | Damage Insurance  | Full Coverage        |
  | Optional Products | Euro Protection, Legal Defense Insurance |
  | Courtesy Car      | Yes                  |
E clico em Next
E sou direcionada para a Aba Enter Select Price Option
E seleciono a opção Ultimate na aba Select Price Option
E clico em Next
E sou direcionada para a Aba Send Quote
Quando preencho os seguintes campos com meus dados válidos:
  | Campo              | Valor                  |
  | E-Mail             | test@example.com       |
  | Phone              | 123-456-7890           |
  | Username           | testuser               |
  | Password           | securepassword         |
  | Confirm Password   | securepassword         |
  | Comments           | Test comment           |
Então clico em Send confirmando o envio do form

