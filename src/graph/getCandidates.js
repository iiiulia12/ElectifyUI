import { gql } from '@apollo/client'

export const GET_CANDIDATES = gql`
  query Candidates($electionId: ID) {
    candidates(electionId: $electionId) {
      id
      civilStatus
      education
      candidateProfile {
        id
        firstName
        lastName
        dateOfBirth
        cnp
        address
      }
      electionCandidate {
        id
        name
        status
        startDate
        endDate
        description
      }
    }
  }
`
