'use client'
import { useState, useEffect } from 'react'
import { getAccount } from 'contract/getAccount'
import { isEmpty, isNull } from 'lodash'
import { Modal } from 'components/modal'

const MESSAGE = 'Please install Metamask to continue..'
const TIMEOUT_DURATION = 30000 // 30 seconds timeout

export const ConnectButton = () => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isCheckingStorage, setIsCheckingStorage] = useState(true)

  useEffect(() => {
    const savedAccount = localStorage.getItem('walletAddress')

    if (savedAccount) {
      setCurrentAccount(savedAccount)
    }

    setIsCheckingStorage(false)
  }, [])

  const handleClick = async () => {
    setIsWaiting(true)
    const timeoutId = setTimeout(() => {
      setIsWaiting(false)
      setIsModalOpen(true)
    }, TIMEOUT_DURATION)

    try {
      const account = await getAccount()

      if (!isNull(account)) {
        setCurrentAccount(account)
        localStorage.setItem('walletAddress', account)
      } else {
        setIsModalOpen(true)
      }
    } catch (error) {
      setIsModalOpen(true)
    } finally {
      clearTimeout(timeoutId)
      setIsWaiting(false)
    }
  }

  const hoverClass = isEmpty(currentAccount)
    ? ' hover:shadow-[0px_0px_20px_5px] hover:cursor-pointer  hover:shadow-neutral-800/50'
    : ''

  return (
    <>
      <button
        onClick={async () => {
          await handleClick()
        }}
        disabled={isWaiting || isCheckingStorage}
        className={`flex items-center rounded-xl border bg-primary-dark/60 text-primary-light/50 hover:text-primary-light/70 ${hoverClass} h-[60%] px-2 py-1 mr-3 max-w-40 truncate ${isWaiting || isCheckingStorage ? 'opacity-50 cursor-not-allowed' : ''}`}>
        <span className={'min-w-0 truncate'}>
          {isCheckingStorage ? 'Checking...' : isWaiting ? 'Connecting...' : currentAccount || 'Connect wallet'}
        </span>
      </button>
      {isModalOpen && <Modal text={MESSAGE} closeModal={setIsModalOpen} />}
    </>
  )
}
