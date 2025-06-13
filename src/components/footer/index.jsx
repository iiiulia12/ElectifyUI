'use client'
import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export const Footer = () => (
  <footer
    className={
      'bg-blackish-blue/80 text-gray-300 flex flex-col md:flex-row items-center justify-between w-full h-[7vh] px-6'
    }>
    <div className={'text-sm'}>© {new Date().getFullYear()} Electify. All rights reserved.</div>

    <div className={'flex space-x-4'}>
      <a href={'https://github.com/iiiulia12'} className={'hover:text-white transition'} aria-label={'GitHub'}>
        <Github size={20} />
      </a>
      <a
        href={'https://www.linkedin.com/in/iulia-ratiu-ba712a268/'}
        className={'hover:text-white transition'}
        aria-label={'LinkedIn'}>
        <Linkedin size={20} />
      </a>
    </div>
  </footer>
)
