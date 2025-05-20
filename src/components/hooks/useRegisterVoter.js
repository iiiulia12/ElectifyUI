import { useGraphQlMutation } from 'graph/hooks/useGraphqlMutation'
import { REGISTER_VOTER } from 'graph/registerVoter'

export const useRegisterVoter = () => {
  const { mutate, error, isPending } = useGraphQlMutation({
    mutation: REGISTER_VOTER,
    endpoint: 'http://localhost:8081/graphql'
  })

  return { mutate, error, isPending }
}
