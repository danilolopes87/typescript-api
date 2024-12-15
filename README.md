# typescript-api

# Tecnologias utilizadas
* Node.js
* TypeScript
* Express
* MongoDB
  
# Conceitos utilizados
* SOLID
* Injeção de Dependência (Dependency Injection)
* Repository Pattern

## Entidades

### User

```ts
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
```


# Rotas

1. **✅ GET /users**: Retorna a lista de usuários salvos no banco de dados.
2. **📝 POST /users**: Cria um novo usuário.
3. **📝 PATCH /users/:id**: Atualiza um usuário específico utilizando o seu `id`.
4. **🔴 DELETE /users/:id**: Deleta um usuário com base no seu `id`.

# Arquitetura

![Arquitetura do Sistema](https://camo.githubusercontent.com/0b12d5e1fa9228bfcc8c3a1379a41df22f977fcec7b492639ae8fa624cd4ebfb/68747470733a2f2f696d6775722e636f6d2f6b356d58466f5a2e706e67)


