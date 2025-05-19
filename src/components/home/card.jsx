import React from 'react'
import Image from 'next/image'

export const Card = ({ title, description, svg }) => (
  <div
    className={
      'bg-white/20 rounded-xl h-[52vh] p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 overflow-hidden'
    }>
    <h3 className={'text-xl font-semibold text-white/70 mb-4'}>{title}</h3>

    <p className={'text-midnight-blue text-md leading-relaxed flex-1 overflow-auto mb-4'}>{description}</p>

    {svg && (
      <div className={'relative w-full flex-1'}>
        <Image src={svg} alt={title} fill style={{ objectFit: 'contain' }} />
      </div>
    )}
  </div>
)
