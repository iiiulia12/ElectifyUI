import { gql } from '@apollo/client'

export const GET_ELECTIONS = gql`
  query Elections($electionsId: ID) {
    elections(id: $electionsId) {
      id
      name
      status
      startDate
      endDate
      description
      commitments
      merkleRoot
      contractAddress
    }
  }
`
