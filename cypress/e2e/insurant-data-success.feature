#utf-8
#language: pt

Funcionalidade: Inserção dos dados do segurador para acessar a próxima aba
Cenário: Validação correta dos dados do segurador

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
Quando preencho os seguintes campos com os dados do segurador:
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
Então sou direcionada para a Aba Enter Product Data

