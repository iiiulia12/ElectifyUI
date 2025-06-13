import React from 'react'
import { Card } from 'components/home/card'
import agreement from 'components/assets/agreement-svgrepo-com.svg'
import vote from 'components/assets/vote-svgrepo-com.svg'
import list from 'components/assets/election-checklist-symbol-svgrepo-com.svg'
import { Container } from 'components/home/container'

export const HomeComponent = () => (
  <Container css={'relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden'}>
    <div className={'absolute inset-0 opacity-10'}>
      <div
        className={
          'absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow'
        }
      />
      <div
        className={
          'absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-1000'
        }
      />
      <div
        className={
          'absolute bottom-20 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow delay-2000'
        }
      />
    </div>

    <div className={'relative z-10 p-10'}>
      <div className={'text-center mb-16 pt-20'}>
        <div className={'inline-block'}>
          <h1
            className={
              'text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-6 tracking-tight leading-tight animate-fade-in'
            }>
            Welcome to
            <span
              className={
                'block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text font-extrabold'
              }>
              Electify
            </span>
          </h1>
        </div>

        <div className={'relative'}>
          <p className={'text-2xl md:text-3xl text-blue-100/90 font-light mb-4 animate-slide-up'}>
            The Trustworthy Blockchain Voting Platform
          </p>
          <div className={'w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-glow'} />
        </div>

        <div
          className={
            'inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 font-medium animate-float'
          }>
          <div className={'w-2 h-2 bg-green-400 rounded-full animate-pulse'} />
          <span>Secured by Blockchain Technology</span>
        </div>
      </div>

      <div className={'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto h-full'}>
        <div className={'hover-scale animate-fade-in-up delay-100'}>
          <Card
            title={'One-Person, One-Vote Security'}
            description={
              'Smart contracts ensure democratic integrity with cryptographic proof that every citizen votes exactly once, creating an immutable record of electoral participation.'
            }
            className={
              'group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20'
            }
          />
        </div>

        <div className={'hover-scale animate-fade-in-up delay-200'}>
          <Card
            title={'Total Privacy Protection'}
            description={
              'Zero-knowledge cryptography and advanced encryption protocols ensure your vote remains completely anonymous while maintaining full verifiability of the electoral process.'
            }
            className={
              'group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20'
            }
          />
        </div>

        <div className={'hover-scale animate-fade-in-up delay-300'}>
          <Card
            title={'Automated Voting Process'}
            description={
              'From poll initialization to vote tallying and result publication, our autonomous smart contract system ensures transparent, tamper-proof electoral administration.'
            }
            className={
              'group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:bg-white/15 hover:border-indigo-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20'
            }
          />
        </div>
      </div>

      <div className={'flex justify-center items-center space-x-8 mt-16 opacity-60'}>
        <div className={'flex items-center space-x-2'}>
          <div className={'w-3 h-3 bg-green-400 rounded-full animate-pulse'} />
          <span className={'text-white/70 text-sm'}>256-bit Encryption</span>
        </div>
        <div className={'flex items-center space-x-2'}>
          <div className={'w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500'} />
          <span className={'text-white/70 text-sm'}>Immutable Records</span>
        </div>
        <div className={'flex items-center space-x-2'}>
          <div className={'w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000'} />
          <span className={'text-white/70 text-sm'}>Zero Downtime</span>
        </div>
      </div>
    </div>
  </Container>
)
