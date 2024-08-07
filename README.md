# Gerenciamento de Usuários

## Descrição

Este projeto é uma aplicação completa de gerenciamento de usuários que inclui um backend em Node.js com Express, um frontend em Vue.js, e é orquestrado com Docker. O objetivo é fornecer uma solução para criar, ler, atualizar e deletar usuários, com uma interface amigável e um backend robusto.

## Requisitos

### Backend (Node.js com Express)

- **Rotas da API RESTful**:
  - `GET /users`: Retorna todos os usuários.
  - `POST /users`: Adiciona um novo usuário.
  - `PUT /users/:id`: Atualiza um usuário existente.
  - `DELETE /users/:id`: Remove um usuário.

- **Banco de Dados**: Utiliza PostgreSQL, com um esquema básico contendo `id`, `nome`, `email`, e `senha` (armazenamento seguro de senha).

- **Sem ORM**: Implementação direta com SQL.

### Frontend (Vue.js)

- **Funcionalidades**:
  - Visualizar a lista de usuários.
  - Adicionar um novo usuário.
  - Editar um usuário existente.
  - Remover um usuário.
  
- **Integração com Backend**: Chamada à API para interações com o backend.

- **Estilos**: Utiliza CSS básico ou frameworks como Bootstrap ou Tailwind.

### Docker

- **Dockerfiles**:
  - Para o backend Node.js.

- **docker-compose**: Orquestra o backend, frontend e o banco de dados. Inicie todos os serviços com `docker-compose up`.

## Instruções para Execução

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/wagnerribeiro-dev/Gerenciamento_de_Usuarios
   cd repositorio
   ```

2. **Configuração e Execução com Docker**:
   - Certifique-se de ter o Docker e o docker-compose instalados.
   - Execute:
     ```bash
     docker-compose up
     ```

   - A aplicação estará disponível em `http://localhost:3000` para o frontend e `http://localhost:5000` para o backend.

3. **Configuração Local (Sem Docker)**:
   - **Backend**:
     - Navegue para o diretório `backend` e instale as dependências:
       ```bash
       cd backend
       npm install
       ```
     - Configure as variáveis de ambiente e inicie o servidor:
       ```bash
       npm start
       ```
   - **Frontend**:
     - Navegue para o diretório `frontend` e instale as dependências:
       ```bash
       cd frontend
       npm install
       ```
     - Inicie o servidor de desenvolvimento:
       ```bash
       npm run serve
       ```

## Estrutura do Projeto

- `backend/`: Código fonte do backend.
- `frontend/`: Código fonte do frontend.
- `docker/`: Arquivos de configuração do Docker.
- `docker-compose.yml`: Configuração para orquestrar os serviços.


## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Por favor, faça um fork do repositório e envie um pull request com suas mudanças.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se tiver dúvidas ou precisar de ajuda, entre em contato através de [wgr.job10@gmail.com] ou [https://www.linkedin.com/in/wagnergoncalvesribeiro].