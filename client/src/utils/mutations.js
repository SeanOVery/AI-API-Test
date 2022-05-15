import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
  mutation createMessage($message: String!, $response: String!) {
    createMessage(message: $message, response: $response) {
      _id
      message
      response
    }
  }
`;


