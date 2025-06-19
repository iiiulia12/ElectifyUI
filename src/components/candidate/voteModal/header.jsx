import React from 'react'

export const StatusHeader = ({ success }) => (
  <h2 className={`text-3xl font-bold ${success ? 'text-success' : 'text-accent-red'}`}>
    {success ? 'Vote submitted successfully!' : 'Vote submission failed.'}
  </h2>
)
