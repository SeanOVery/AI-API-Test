import { gql } from '@apollo/client';


export const QUERY_MESSAGES = gql`
  query messages() {
    messages() {
      _id
      message
      response
    }
  }
`;
