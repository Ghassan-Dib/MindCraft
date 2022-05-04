import { gql } from '@apollo/client';

export const DELETE_CONTACT_MUTATION = gql`
  mutation ($email: String!) {
    deleteContact(email: $email)
  }
`;

export const CREATE_CONTACT_MUTATION = gql`
  mutation ($name: String!, $email: String!, $message: String!) {
    createContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;
