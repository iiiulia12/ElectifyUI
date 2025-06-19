import React from 'react'
import Image from 'next/image'

export const Card = ({ title, description, svg, link, className = '' }) => (
  <div
    className={
      'h-full bg-blackish-blue/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between gap-4 transition-transform duration-300 ease-out transform hover:-translate-y-1 hover:shadow-lg'
    }
    aria-label={link ? `Learn more about ${title}` : title}>
    <header>
      <h3 className={'text-2xl font-semibold text-white/80 '}>{title}</h3>
    </header>

    <div className={'flex-1'}>
      <p className={'text-cloudy text-base '}>{description}</p>
    </div>

    {svg && (
      <div className={'self-center'}>
        <Image src={svg} alt={`${title} icon`} width={96} height={96} className={'mb-2'} />
      </div>
    )}
  </div>
)
