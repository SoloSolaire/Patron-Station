import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String, $email: String, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($comment_description: String) {
  addComment(comment_description: $comment_description) {
    _id
    comment_description
    date_created
  }
}
`;

export const ADD_PROJECT = gql`
mutation addProject($title: String!, $description: String!) {
  addProject(title: $title, description: $description) {
    _id
    title
    description
    date_created
  }
}
`;

