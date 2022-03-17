import { gql } from 'apollo-server';

export const ToDoTypeDefs = gql`
  extend type Query {
    todoitem(ID: Int!): ToDoItem
  }

  type ToDoItem {
    ID: Int
    NAME: String
    ISCOMPLETE: Boolean
  }
`;