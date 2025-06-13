import React from 'react'

export const CandidateResultItem = ({ candidate }) => {
  const { id, firstName, lastName, votes } = candidate

  return (
    <div key={id} className={'gradient-border-horizontal p-2 px-6 flex justify-between items-center my-2'}>
      <div>
        <p className={'font-semibold'}>
          {firstName} {lastName} {`(Candidate ${id})`}
        </p>
      </div>
      <div className={'text-xl font-bold text-navy-blue'}>
        {votes} vote{votes !== 1 ? 's' : ''}
      </div>
    </div>
  )
}
