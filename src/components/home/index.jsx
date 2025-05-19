import React from 'react'
import { Card } from 'components/home/card'
import agreement from 'components/assets/agreement-svgrepo-com.svg'
import vote from 'components/assets/vote-svgrepo-com.svg'
import list from 'components/assets/election-checklist-symbol-svgrepo-com.svg'

export const HomeComponent = () => (
  <div className={'flex justify-center items-center mx-[4vh] mt-[15vh]'}>
    <div className={'bg-midnight-blue/90 rounded-2xl p-10 shadow-lg w-full h-[75vh]'}>
      <h1 className={'text-4xl font-bold text-white/80 mt-[8vh] mb-[5vh] text-center'}>Welcome to Electify</h1>
      <p className={'text-accent-light text-xl text-center mb-[8vh]'}>The Trustworthy Blockchain Voting Platform</p>

      <div className={'grid grid-cols-1 md:grid-cols-3 gap-[5%]'}>
        <Card
          title={'One-Person, One-Vote Security'}
          description={
            'Smart contracts make sure everyone can only vote once and keep all votes safe from any changes.'
          }
          svg={list}
        />
        <Card
          title={'Total Privacy'}
          description={
            'Encryption keeps your identity and ballot completely separate, so no one can link you to your vote.'
          }
          svg={agreement}
        />
        <Card
          title={'Automated Voting Process'}
          description={'From opening polls to counting votes and showing results, everything happens automatically.'}
          svg={vote}
        />
      </div>
    </div>
  </div>
)
