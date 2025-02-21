'use client'

import { contract } from 'contract'
import { useEffect, useState } from 'react'
import { useAccounts } from 'contract/useAccounts'

const Pages = () => {
  const [votes, setVotes] = useState([])

  const account = useAccounts()
  // const handleClick = async () => {
  //   try {
  //     const votes = await contract()
  //     setVotes(votes)
  //
  //     console.log('votes', votes)
  //   } catch (error) {
  //     console.error('Error calling contract:', error)
  //   }
  // }

  useEffect(() => {
    const subscription = async () => {
      contract(setVotes)
    }

    subscription()
  }, [])
  console.log(votes)

  return (
    <>
      {/*<div className={'text-2xl text-red-500 bg-amber-300 hover:text-white cursor-pointer'}>get votes</div>*/}
      {/*{!isEmpty(votes) &&*/}
      {/*  votes.map((vote, index) => (*/}
      {/*    <div key={index}>*/}
      {/*      {vote.name} {vote.numberOfVotes}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      <div> {account} </div>
    </>
  )
}

export default Pages
