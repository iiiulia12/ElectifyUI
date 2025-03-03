'use client'

import { useEffect, useMemo, useState } from 'react'
import { isEmpty } from 'lodash'
import { getCandidates } from 'contract/getCandidates'
import { getContract } from 'contract/getContract'
import { getWeb3 } from 'contract/getWeb3'
import { vote } from 'contract/vote'

const Candidates = () => {
  const [candidates, setCandidates] = useState([])
  const web3 = useMemo(() => getWeb3(), [])
  const contract = useMemo(() => getContract(web3), [web3])

  const handleClick = async name => {
    console.log(name)
    vote(contract, web3, name)
  }

  useEffect(() => {
    console.log(contract)

    const fetchCandidates = async () => {
      const candidateData = await getCandidates(contract, web3)
      setCandidates(candidateData)
    }

    fetchCandidates()
  }, [web3, contract])
  console.log(candidates)

  return (
    <div>
      {!isEmpty(candidates) &&
        candidates[0].map((name, index) => (
          <button
            className={' p-6 w-full h-6 bg-cloudy hover:text-white cursor-pointer mt-1'}
            key={index}
            onClick={async () => {
              await handleClick(candidates[0][index])
            }}>
            <div>
              {name} {candidates[1][index]}
            </div>
          </button>
        ))}
    </div>
  )
}

export default Candidates
