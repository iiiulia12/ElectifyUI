import { ElectionForm } from 'components/election/electionForm'
import { useMemo } from 'react'
import { getWeb3 } from 'contract/getWeb3'
import { getContract } from 'contract/getContract'
import { ElectionList } from 'components/election/electionList'

export const Election = () => {
  const web3 = useMemo(() => getWeb3(), [])
  const contract = useMemo(() => getContract(web3), [web3])

  return (
    <>
      <ElectionForm contract={contract} />
      <ElectionList contract={contract} />
    </>
  )
}
