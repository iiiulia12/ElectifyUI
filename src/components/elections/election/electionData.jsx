import React from 'react'
import moment from 'moment'
import { useGetElections } from 'components/hooks/useGetElections'
import { useParams } from 'next/navigation'

export const ElectionData = () => {
  const { electionId } = useParams()
  const { data, isFetching, error } = useGetElections({ electionsId: electionId })

  if (isFetching) {
    return (
      <div>
        <p className={'text-center text-gray-500'}>Loading election data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p className={'text-center text-red-500'}>Error: {error.message}</p>
      </div>
    )
  }

  const election = data?.elections?.[0]

  console.log(election)

  if (!election) {
    return (
      <div>
        <p className={'text-center text-gray-500'}>No election found.</p>
      </div>
    )
  }

  return (
    <div>
      <div className={'w-full mx-auto p-6  rounded-2xl shadow-lg space-y-4'}>
        <h1 className={'text-3xl font-bold text-midnight-blue'}>{election.name}</h1>
        <p className={'text-cloudy text-xl'}>{election.description}</p>
        <p className={'text-md text-dark-cloudy '}>
          Status: <span className={' text-deep-ocean font-bold'}>{election.status}</span>
        </p>
        <div className={'text-sm text-navy-blue'}>
          <p>
            Start Date:{' '}
            <span className={'font-medium'}>
              {moment(Number(election.startDate)).format('MMMM D, YYYY [at] h:mm A')}
            </span>
          </p>
          <p>
            End Date:{' '}
            <span className={'font-medium'}>{moment(Number(election.endDate)).format('MMMM D, YYYY [at] h:mm A')}</span>
          </p>
        </div>

        {election.contractAddress && (
          <div className={'my-2'}>
            <p className={'text-sm text-gray-600'}>
              Merkle Root: <span className={'font-mono text-xs break-all'}>{election.merkleRoot}</span>
            </p>
            <p className={'text-sm text-gray-600'}>
              Contract Address: <span className={'font-mono text-xs break-all'}>{election.contractAddress}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
