'use client'
import { useState, useEffect } from 'react'
import { getAccount } from 'contract/getAccount'
import { isEmpty, isNull } from 'lodash'
import { Modal } from 'components/modal'
import { motion } from 'framer-motion'
import { Wallet, Loader2 } from 'lucide-react'

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

  const isConnected = !isEmpty(currentAccount)

  return (
    <>
      <motion.button
        onClick={handleClick}
        disabled={isWaiting || isCheckingStorage}
        className={`flex items-center gap-2 rounded-xl font-medium px-4 py-2 transition-all duration-200 ${
          isConnected 
            ? 'bg-green-100 text-green-700 border border-green-200 hover:bg-green-200' 
            : 'btn-primary'
        } ${isWaiting || isCheckingStorage ? 'opacity-50 cursor-not-allowed' : ''}`}
        whileHover={!isWaiting && !isCheckingStorage ? { scale: 1.02 } : {}}
        whileTap={!isWaiting && !isCheckingStorage ? { scale: 0.98 } : {}}
      >
        {isWaiting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Wallet className="w-4 h-4" />
        )}
        <span className={'min-w-0 truncate max-w-32'}>
          {isCheckingStorage 
            ? 'Checking...' 
            : isWaiting 
            ? 'Connecting...' 
            : currentAccount 
            ? `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`
            : 'Connect Wallet'
          }
        </span>
      </motion.button>
      {isModalOpen && <Modal text={MESSAGE} closeModal={setIsModalOpen} />}
    </>
  )
}