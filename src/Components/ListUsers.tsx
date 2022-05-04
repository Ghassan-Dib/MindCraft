import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface GetUsersInfo {
  name: string;
  email: string;
}

const GET_ALL_USERS = gql`
  query GetAllUsers () {
    users {
      name
      email
    }
  }
`;

const ListUsers = () => {
  const { data, loading, error } = useQuery<GetUsersInfo>(GET_ALL_USERS);
  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  if (!data) return <p>Not found</p>;
  return <div>ListUsers</div>;
};

export default ListUsers;
