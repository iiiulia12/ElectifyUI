export const getAccount = async () => {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

    if (accounts.length > 0) return accounts[0]
  } else return null
}
