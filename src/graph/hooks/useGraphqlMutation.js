'use client'

import { useMutation } from '@tanstack/react-query'
import { createGraphqlClient } from 'graph/createGraphqlClient'

export const useGraphQlMutation = ({ mutation, endpoint }) =>
  useMutation({
    mutationFn: async variables => {
      const graphqlClient = await createGraphqlClient(endpoint)

      return await graphqlClient.request(mutation, variables)
    }
  })
