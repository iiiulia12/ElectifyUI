import React from 'react'
import Image from 'next/image'

export const Card = ({ title, description, svg }) => (
  <div
    className={
      'bg-blackish-blue/20 rounded-xl p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 '
    }>
    <div className={'text-3xl font-semibold text-white/80 mb-4'}>{title}</div>

    <div className={'text-cloudy text-md my-[5vh]'}>{description}</div>

    {svg && (
      <div>
        <Image src={svg} alt={title} className={'h-24 mb-10'} />
      </div>
    )}
  </div>
)
