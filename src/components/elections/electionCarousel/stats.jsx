import { TrendingUp, Users } from 'lucide-react'
import React from 'react'

export const Stats = ({ elections }) => (
  <div className={'flex justify-center items-center space-x-8 mb-12'}>
    <div
      className={
        'flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'
      }>
      <TrendingUp className={'w-5 h-5 text-green-400'} />
      <span className={'text-white/80 text-sm font-medium'}>{elections.length} Election</span>
    </div>
    <div
      className={
        'flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'
      }>
      <Users className={'w-5 h-5 text-blue-400'} />
      <span className={'text-white/80 text-sm font-medium'}>Democratic Process</span>
    </div>
    <div
      className={
        'flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20'
      }>
      <div className={'w-2 h-2 bg-green-400 rounded-full animate-pulse'} />
      <span className={'text-white/80 text-sm font-medium'}>Live Voting</span>
    </div>
  </div>
)
