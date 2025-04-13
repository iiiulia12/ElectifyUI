import { gql } from '@apollo/client'

export const GET_ELECTIONS = gql`
  query Elections {
    elections {
      id
      name
      status
      startDate
      endDate
      description
    }
  }
`
