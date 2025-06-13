# E-commerce Inicial

Este repositório contém uma estrutura simples para iniciar um projeto de e-commerce com backend em Node.js/Express e um frontend estático.

## Como usar

1. Instale as dependências do backend (necessário Node.js):
   ```bash
   cd backend
   npm install
   npm start
   ```
   O servidor iniciará na porta `3001`.

2. Abra o arquivo `frontend/src/index.html` em seu navegador. Ele irá buscar os produtos do backend e exibi-los em uma lista.

## Estrutura

- `backend/` - Servidor Express simples que disponibiliza produtos em `/products` e serve o frontend estático.
- `frontend/` - Contém arquivos estáticos HTML e JavaScript para consumir o backend. A pasta `src/builder` inclui uma página de personalização de canecas 3D.

Este é apenas um ponto de partida e pode ser expandido conforme as necessidades do projeto.
