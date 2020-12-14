export const schema = gql`
  type Todo {
    id: Int!
    body: String
    status: String
  }

  input TodoInput {
    body: String!
    status: String!
  }

  # type TodoPage {
  #   data: [Todo]!
  #   after: String
  #   before: String
  # }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(data: TodoInput!): Todo!
    updateTodo(
      id: ID!
      data: TodoInput!
    ): Todo
    deleteTodo(id: ID!): Todo
  }
`