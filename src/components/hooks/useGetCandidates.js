import { GET_CANDIDATES } from 'graph/getCandidates'
import { useGraphQLQuery } from 'graph/hooks/useGraphqlQuery'

export const useGetCandidates = variables => {
  const { data, error, isFetching } = useGraphQLQuery({
    queryKey: ['getCandidates', variables],
    query: GET_CANDIDATES,
    endpoint: 'http://localhost:8081/graphql',
    variables
  })

  return { data, error, isFetching }
}
