import { gql } from '@apollo/client';

const SIGNUP = gql`
mutation Signup($username: String!, $password: String!){
  signup(username: $username, password: $password)
}
`;

const LOGIN = gql`
mutation LOGIN($username: String!, $password: String!){
  login(username: $username, password: $password)
}
`;

export { SIGNUP, LOGIN };