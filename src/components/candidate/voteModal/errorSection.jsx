import React from 'react'

export const ErrorSection = ({ message }) => (
  <div className={'mt-6'}>
    <h2 className={'text-xl font-bold text-accent-red'}>Error: {message}</h2>
  </div>
)
