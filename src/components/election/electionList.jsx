import React, { useEffect, useMemo, useState } from 'react'
import { notifyNewElection } from 'components/election/utils/notifyNewElection'
import { getElections } from 'components/election/utils/getElections'
import { getWeb3 } from 'contract/getWeb3'
import { getContract } from 'contract/getContract'
import { Transition } from '@headlessui/react'

export const ElectionList = () => {
  const web3 = useMemo(() => getWeb3(), [])
  const contract = useMemo(() => getContract(web3), [web3])

  const [newElection, setNewElection] = useState([])
  const [elections, setElections] = useState([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    if (newElection) {
      setShowNotification(true)

      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [newElection])
  useEffect(() => {
    const subscription = async () => {
      notifyNewElection(setNewElection, contract)
    }

    subscription()
  }, [setNewElection, contract])

  useEffect(() => {
    const fetchElections = async () => setElections(await getElections(contract))
    fetchElections()
  }, [newElection, contract])

  return (
    <>
      <Transition
        show={showNotification}
        enter={'transition ease-out duration-300'}
        enterFrom={'opacity-0 -translate-y-[10px]'}
        enterTo={'opacity-100 translate-y-0'}
        leave={'transition ease-in duration-300'}
        leaveFrom={'opacity-100 translate-y-0'}
        leaveTo={'opacity-0 -translate-y-[10px]'}>
        <div>
          <div>New Election: {newElection.title}</div>
        </div>
      </Transition>

      {elections.map((election, index) => (
        <div key={index} className={'ml-2'}>
          {election.name} startDate: {election.startDate} endDate: {election.endDate}
        </div>
      ))}
    </>
  )
}
