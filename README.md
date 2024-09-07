# 🚀 Projeto de Testes com Cypress - Academia Accenture 2024

Este projeto foi desenvolvido como parte de um teste para a Accenture, utilizando Cypress para automação de testes end-to-end. O foco principal foi a automação de funcionalidades críticas, incluindo casos de testes negativos, como o limite de caracteres em um campo e modificações na validação de campos.
## 📸 Capturas de Tela

![image](https://github.com/user-attachments/assets/87df234f-66f0-416a-b2e5-1f269a34f96f)

https://github.com/user-attachments/assets/56d8cf55-b0cc-4693-b7d6-b015e2550fab

## 🧪 Casos de Teste Implementados

### ✅ Testes Positivos
- Verificação de submissão bem-sucedida do formulário de cotação.
- Inserção e validação de dados como nome, e-mail, telefone, e outros campos obrigatórios.

### ❌ Testes Negativos
- **Limitação de caracteres no campo de nome:**
  - Testado com valores que excedem o limite esperado, validando que o sistema não aceita mais caracteres do que o permitido.
  
- **Particionamento de Equivalência:**
  - Dividimos os dados em classes de equivalência (válidos e inválidos) para garantir que o sistema só aceite valores dentro dos limites esperados.
  
- **Campo obrigatório alterado:**
  - Um campo que inicialmente não era obrigatório foi modificado para ser obrigatório e o teste verificou se ele passa corretamente como válido.

## 🛠️ Tecnologias Utilizadas

- **Cypress:** Framework de testes end-to-end.
- **JavaScript:** Linguagem de programação usada no projeto.
- **Faker.js:** Para geração de dados fictícios para os testes.

## 🌍 Como executar os testes

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/seuprojeto.git
   ``````
2. Instale as dependências:
    ```bash
   npm install
   ``````
3. Execute os testes:
     ```bash
   npx cypress open
   ``````
## 🎯 Objetivo

Este projeto visa demonstrar a implementação de testes automatizados usando Cypress, assegurando a integridade e a validação correta dos dados em um formulário de cotação.

## 🔗 Links Úteis
- [Miro](https://miro.com/welcomeonboard/RmlzUGQ0bmh5UGwyZTlIS21sazRORXo5dFVvSFh5Z21FempFSlhXODNhZlJvQ3B1WVYza1hiUzU4RnF4dHFWanwzNDU4NzY0NTUxMzU3NDYwNTUzfDI=?share_link_id=327239584084)
- [Trecentis](https://sampleapp.tricentis.com/101/app.php)
- [Documentação do Cypress](https://docs.cypress.io)
- [Faker.js](https://www.npmjs.com/package/faker)

   
