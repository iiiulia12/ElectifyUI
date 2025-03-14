'use client'
import { useState } from 'react'
import { getAccount } from 'contract/getAccount'
import { isEmpty, isNull } from 'lodash'
import { Modal } from 'components/modal'

const MESSAGE = 'Please install Metamask to continue..'

export const ConnectButton = () => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = async () => {
    const account = await getAccount()
    !isNull(account) ? setCurrentAccount(account) : setIsModalOpen(true)
  }

  const hoverClass = isEmpty(currentAccount) ? ' hover:shadow-[0px_0px_20px_5px]  hover:shadow-cloudy/50' : ''

  return (
    <>
      <button
        onClick={async () => {
          await handleClick()
        }}
        className={`flex items-center rounded-xl border bg-navy-blue/60 text-ice-blue/50 hover:text-ice-blue/70 ${hoverClass} h-[60%] px-2 py-1 mr-3 max-w-40 truncate`}>
        <span className={'min-w-0 truncate'}>{currentAccount || 'Connect wallet'}</span>
      </button>
      {isModalOpen && <Modal text={MESSAGE} closeModal={setIsModalOpen} />}
    </>
  )
}
