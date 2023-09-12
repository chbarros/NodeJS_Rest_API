# NodeJS_Rest_API
API REST em Express com as operações básicas de CRUD utilizando Knex.

Link no RENDER:

    https://node-rest-api-express-knex.onrender.com/

Detalhes dos endpoints

- Listar todos os produtos:

    GET /app/v2/produtos

- Obter um produto:

    GET /app/v2/produtos/:id

    parameter: "id", do tipo (int) contendo o código do produto

- Inserir um produto:

    POST /app/v2/produtos
    
    body:   "descricao", tipo (string) contendo o nome do produto;
            "marca", tipo (string) contendo o nome da marca do produto;
            "valor", do tipo (decimal) cotendo o valor do produto.

- Atualizar um produto:

    PUT /app/v2/produtos/:id

    parameter: "id", do tipo (int) contendo o código do produto

    body:   "descricao", tipo (string) contendo o nome do produto;
            "marca", tipo (string) contendo o nome da marca do produto;
            "valor", do tipo (decimal) cotendo o valor do produto.   

- Deletar um produto:

    DELETE /app/v2/produtos/:id

    parameter: "id", do tipo (int) contendo o código do produto