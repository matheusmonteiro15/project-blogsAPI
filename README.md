# Blogs API

Este é o projeto **Blogs API**, uma aplicação backend desenvolvida em **Node.js** para gestão de conteúdo de um blog.
O sistema oferece uma API RESTful para cadastro de usuários, autenticação via **JWT**, e gerenciamento completo (CRUD) de posts e categorias de blog.

## 🚀 Tecnologias Utilizadas

*   **Node.js** & **Express**: Framework web para construção da API.
*   **Sequelize**: ORM para interação com banco de dados SQL.
*   **MySQL**: Banco de dados relacional.
*   **JSON Web Token (JWT)**: Para autenticação segura de usuários.
*   **Docker** & **Docker Compose**: Para orquestração de containers da aplicação e banco de dados.
*   **Joi**: Para validação de dados de entrada.

## 📋 Funcionalidades Principais

*   **Autenticação**: Login de usuários e geração de token JWT.
*   **Usuários**: Criação, listagem e busca de usuários.
*   **Categorias**: Criação e listagem de categorias para os posts.
*   **Blog Posts**:
    *   Criação de posts associados a categorias.
    *   Listagem de todos os posts e busca por ID.
    *   Edição e remoção de posts (apenas pelo autor).
    *   Busca de posts por termo (título ou conteúdo).

## 📚 Documentação das Rotas

Principais endpoints da API:

*   `POST /login`: Autentica usuário e retorna token.
*   `POST /user`: Cria novo usuário.
*   `GET /user`: Lista usuários (requer token).
*   `POST /categories`: Cria categoria (requer token).
*   `GET /categories`: Lista categorias (requer token).
*   `POST /post`: Cria novo post (requer token).
*   `GET /post`: Lista posts (requer token).
*   `GET /post/search?q=termo`: Busca posts por termo.
