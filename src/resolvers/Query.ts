import { gql } from '@apollo/client';

export const CONTACTS_QUERY = gql`
  {
    contacts {
      name
      email
      message
    }
  }
`;
