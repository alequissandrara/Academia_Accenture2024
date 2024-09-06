#utf-8
#language: pt

Funcionalidade: Inserção dos dados do veículo para acesssar próxima aba
Cenário: Válidação correta dos dados do veículo
Dado que acesso o site da Tricentis
E clico na opção Automobile
Quando preencho os seguintes campos com os dados do automóvel:
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
Então sou direcionada para a próxima Aba