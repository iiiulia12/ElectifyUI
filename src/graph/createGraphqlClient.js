'use client'

import { GraphQLClient } from 'graphql-request'

export const createGraphqlClient = async endpoint => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return new GraphQLClient(endpoint, {
    headers
  })
}
