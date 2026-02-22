# API-Monolitico_CP3031187

API Rest para gerenciamento de usuários desenvolvida com **Node.js**, **Express** e **SQLite**

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/estevan324/API-Monolitico_CP3031187.git
```

2. Instale as dependências

```bash
npm install
```

## ▶️ Executando o Projeto

```
npm start
```

O servidor será iniciado em:

```http
http://localhost:3000
```

## 📌 Endpoints

### GET /users

Resposta:

```json
[
  {
    "id": 2,
    "nome": "João Silva",
    "email": "joaosilva@gmail.com",
    "status": "ativo",
    "created_at": "2026-02-22 23:23:54"
  }
]
```

### GET users/:id

Resposta (200):

```json
{
  "id": 2,
  "nome": "João Silva",
  "email": "joaosilva@gmail.com",
  "status": "ativo",
  "created_at": "2026-02-22 23:23:54"
}
```

Erro (404):

```json
{
  "error": "Usuário não encontrado"
}
```

### POST /users

Body (JSON):

```json
{
  "nome": "Maria",
  "email": "maria@email.com"
}
```

Resposta (201):

```json
{
  "id": 2,
  "nome": "Maria",
  "email": "maria@gmail.com"
}
```

Erros possíveis:

- 400 - Nome e email são obrigatórios
- 400 - Email já cadastrado

### PUT /users/:id

Body (JSON):

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

Resposta (200):

```json
{
  "id": 2,
  "nome": "Maria",
  "email": "maria@gmail.com"
}
```

Erros possíveis:

- 404 - Usuário não encontrado
- 400 - Nome e email são obrigatórios
- 400 - Email já cadastrado

### DELETE /users/:id

Resposta:

```http
204 No Content
```

Erro (404):

```json
{
  "error": "Usuário não encontrado"
}
```

## 🗄️ Banco de Dados

O projeto utiliza **SQLite** como banco de dados local.

- Possui restrição UNIQUE no campo email
- O usuário não é excluído, apenas atualizado como **desativado**
- Caso tente cadastrar um email já existente, a API retorna:

```json
{
  "error": "Email já cadastrado"
}
```

## 🧠 Padrão Utilizado

A aplicação segue uma separação em camadas:

- **Controller** → Responsável pelas requisições e respostas HTTP
- **Service** → Responsável pela regra de negócio e acesso ao banco de dados
