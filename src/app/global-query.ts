/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $lastName: String!) {
    addUser(name: $name, lastName: $lastName) {
      id
      name
      lastName
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      lastName
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
    }
  }`;


export const updateUser = gql`
  mutation updateUser($id: String!, $name: String!, $lastName: String!) {
    updateUser(id: $id, name: $name, lastName: $lastName) {
      id
      name
      lastName
    }
  }`;

