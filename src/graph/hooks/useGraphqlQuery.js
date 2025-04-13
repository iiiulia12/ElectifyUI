'use client'

import { useQuery } from '@tanstack/react-query'
import { createGraphqlClient } from 'graph/createGraphqlClient'

export const useGraphQLQuery = ({ query, endpoint, variables, options, queryKey }) =>
  useQuery({
    queryKey,
    queryFn: async () => {
      const graphqlClient = await createGraphqlClient(endpoint)

      return await graphqlClient.request(query, variables)
    },
    ...options,
    retry: 3,
    enabled: !options?.skip
  })
