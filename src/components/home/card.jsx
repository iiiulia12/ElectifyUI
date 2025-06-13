import React from 'react'
import Image from 'next/image'

export const Card = ({ title, description, svg }) => (
  <div
    className={
      'bg-blackish-blue/20 rounded-xl lg:p-4 2xl:p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 '
    }>
    <div className={'text-2xl font-semibold h-16 2xl:h24 text-white/80 mb-4'}>{title}</div>

    <div className={'text-cloudy text-md h-18  2xl:my-[5vh]'}>{description}</div>

    {svg && (
      <div>
        <Image src={svg} alt={title} className={' h-18 2xl:h-24 mb-2'} />
      </div>
    )}
  </div>
)
