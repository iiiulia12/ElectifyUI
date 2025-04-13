import { GET_ELECTIONS } from 'graph/getElections'
import { useGraphQLQuery } from 'graph/hooks/useGraphqlQuery'

export const useGetElections = variables => {
  const { data, error, isFetching } = useGraphQLQuery({
    queryKey: ['getElections', variables],
    query: GET_ELECTIONS,
    endpoint: 'http://localhost:8081/graphql',
    variables
  })

  return { data, error, isFetching }
}
