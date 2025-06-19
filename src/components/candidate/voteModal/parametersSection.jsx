import React from 'react'

export const SentParameters = ({ values }) => (
  <div className={'mt-6'}>
    <h3 className={'text-lg font-semibold text-neutral-50'}>Parameters</h3>
    <ul className={'list-disc list-inside text-sm text-light-sky-blue mt-2 break-words'}>
      {Object.entries(values).map(([key, value]) => (
        <li key={key}>
          <span className={'font-medium text-neutral-50'}>{key}:</span> {JSON.stringify(value)}
        </li>
      ))}
    </ul>
  </div>
)
