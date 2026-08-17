# Produtos (ServeRest)

API REST de produtos em [ServeRest](https://serverest.dev). POST/PUT/DELETE exigem JWT de administrador (`Authorization: Bearer …`) via `POST /login`.

## Cenários

### PRODUTOS-PRODUTOS-001 — Listar produtos (GET)

Given sessão admin com JWT
When `GET /produtos`
Then status 200 e corpo com `quantidade` e `produtos`

### PRODUTOS-PRODUTOS-002 — Cadastrar produto (POST)

Given JWT admin
When `POST /produtos` com payload válido
Then status 201, `Cadastro realizado com sucesso` e `_id`

### PRODUTOS-PRODUTOS-003 — Alterar produto (PUT)

Given produto existente e JWT admin
When `PUT /produtos/{_id}` com payload válido
Then status 200 e `Registro alterado com sucesso`

### PRODUTOS-PRODUTOS-004 — Excluir produto (DELETE)

Given produto existente e JWT admin
When `DELETE /produtos/{_id}`
Then status 200 e `Registro excluído com sucesso`

### PRODUTOS-PRODUTOS-005 — Buscar produto por id (GET)

Given produto existente
When `GET /produtos/{_id}`
Then status 200 e corpo com o mesmo `_id` e `nome`

### PRODUTOS-PRODUTOS-006 — Cadastrar produto sem JWT (POST)

Given request sem `Authorization`
When `POST /produtos`
Then status 401 e mensagem de token inválido/ausente
