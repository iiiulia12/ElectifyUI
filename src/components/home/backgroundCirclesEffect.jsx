import React from 'react'

export const BackgroundCirclesEffect = () => (
  <div className={'absolute inset-0 opacity-10'}>
    <div className={'absolute top-20 left-10 w-72 h-72 bg-secondary-dark rounded-full filter blur-xl animate-pulse'} />
    <div
      className={
        'absolute top-40 right-10 w-72 h-72 bg-secondary-teal rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000'
      }
    />
    <div
      className={
        'absolute bottom-20 left-20 w-72 h-72 bg-deep-ocean rounded-full  blur-xl animate-pulse-slow delay-2000'
      }
    />
  </div>
)
