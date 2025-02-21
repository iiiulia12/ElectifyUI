import { useState, useEffect } from 'react'

export const useAccounts = () => {
  const [currentAccount, setCurrentAccount] = useState('')

  useEffect(() => {
    async function loadAccount() {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

        if (accounts.length > 0) {
          setCurrentAccount(accounts[0])
        }
      } else {
        console.log('Please install MetaMask!')
      }
    }

    loadAccount()

    // Listen for account changes
    window.ethereum?.on('accountsChanged', accounts => {
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0])
      } else {
        setCurrentAccount('')
      }
    })
  }, [])

  return currentAccount ? currentAccount : 'No account connected'
}
