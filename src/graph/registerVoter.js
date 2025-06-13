import { gql } from '@apollo/client'

export const REGISTER_VOTER = gql`
  mutation RegisterVoter(
    $cnp: String!
    $firstName: String!
    $lastName: String!
    $commitment: String!
    $electionId: Int!
  ) {
    registerVoter(
      cnp: $cnp
      firstName: $firstName
      lastName: $lastName
      commitment: $commitment
      electionId: $electionId
    ) {
      success
      message
      code
    }
  }
`
