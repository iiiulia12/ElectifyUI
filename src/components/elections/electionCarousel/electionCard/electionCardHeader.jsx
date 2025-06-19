import React from 'react'

export const ElectionCardHeader = ({ statusInfo, StatusIcon }) => (
  <div className={'flex items-center mb-3'}>
    <div className={`p-2 ${statusInfo.bgColor} rounded-lg mr-3 ${statusInfo.borderColor} border`}>
      <StatusIcon className={`w-5 h-5 ${statusInfo.color}`} />
    </div>
    <span
      className={`text-sm font-semibold ${statusInfo.color} px-3 py-1 ${statusInfo.bgColor} rounded-full ${statusInfo.borderColor} border`}>
      {statusInfo.status}
    </span>
  </div>
)
