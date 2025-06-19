import React from 'react'

export const ElectionStatus = ({ election }) => {
  const getStatusColor = status => {
    switch (status) {
      case 'active':
        return 'from-secondary-dark to-secondary-light'
      case 'closed':
        return ' from-accent-red to-accent-red-light'
      case 'pending':
        return ' from-accent-start-pending to-accent-pending-light'
      default:
        return 'from-gray-400 to-slate-400'
    }
  }

  return (
    <div className={'flex justify-center mb-8'}>
      <div
        className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${getStatusColor(election.status)} text-white font-semibold shadow-lg`}>
        <div className={'w-2 h-2 bg-white rounded-full mr-3 animate-pulse'} />
        Status: {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
      </div>
    </div>
  )
}
