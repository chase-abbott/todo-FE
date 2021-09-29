import { gql } from '@apollo/client';

const GET_TODOS = gql`
query {
  todos {
  _id
  content
  completed
  }
}
`;

export { GET_TODOS };