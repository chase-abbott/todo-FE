import { gql } from '@apollo/client';

const ADD_TODO = gql`
mutation Add($content: String!){
  addTodo(content: $content){
    _id
    content
    completed
  }
}`;

const COMPLETE_TODO = gql`
mutation Complete ($_id: String!) {
  completeTodo(_id: $_id){
    _id
    content
    completed
  }
}`;

const DELETE_TODO = gql`
mutation Delete ($_id: String!){
  deleteTodo(_id: $_id){
    _id
    content
    completed
  }
}
`;

export { ADD_TODO, COMPLETE_TODO, DELETE_TODO };