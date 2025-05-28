import { validate } from 'components/elections/election/utils/yup/validate'
import { useRegisterVoter } from 'components/hooks/useRegisterVoter'
import { useParams } from 'next/navigation'
import { saveCommitment } from 'components/elections/election/utils/saveCommitment'
import { useGetElections } from 'components/hooks/useGetElections'
import { useEffect, useMemo, useRef, useState } from 'react'
import { DisplayResponse } from 'components/elections/election/displayResponse'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const ElectionForm = ({ contract }) => {
  const { electionId } = useParams()
  const { mutate, isSuccess, data } = useRegisterVoter()
  const { data: electionsData, refetch } = useGetElections({ electionsId: electionId })
  const electionCommitments = useMemo(() => electionsData?.elections?.[0]?.commitments || [], [electionsData])

  const [voter, setVoter] = useState(null)
  const [jsonData, setJsonData] = useState(null)
  const [pendingCommitment, setPendingCommitment] = useState(null)

  const prevCommitments = usePrevious(electionCommitments)

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      cnp: e.target.cnp.value
    }

    try {
      const validation = await validate(formData, contract)
      const { json, voter } = validation
      console.log('validated voter object:', voter)

      setJsonData(json)
      setVoter(voter)
      setPendingCommitment(json.commitment)

      mutate({ ...voter, electionId: Number(electionId) })
    } catch (err) {
      console.error('Validation failed', err)
    }
  }

  useEffect(() => {
    if (data?.registerVoter?.success === true) {
      saveCommitment(jsonData, electionId, voter?.cnp)
    }
  }, [data, electionId, jsonData, voter?.cnp])

  return (
    <div
      className={
        'flex flex-row items-center justify-center w-[50vh] h-[60vh] gap-3 mt-10 border rounded-2xl border-accent-dark '
      }>
      <form onSubmit={handleSubmit} className={'flex flex-col gap-3 w-50%'}>
        <input
          type={'text'}
          name={'firstName'}
          placeholder={'First Name'}
          className={'p-2 border rounded-2xl border-accent-dark'}
        />
        <input
          type={'text'}
          name={'lastName'}
          placeholder={'Last Name'}
          className={'p-2 border rounded-2xl border-accent-dark'}
        />
        <input type={'text'} name={'cnp'} placeholder={'CNP'} className={'p-2 border rounded-2xl border-accent-dark'} />
        <button
          type={'submit '}
          className={
            'mt-6 p-1 text-accent-dark/70 bg-cloudy/10 text-lg rounded-xl hover:shadow-[0px_0px_20px_5px] hover:cursor-pointer hover:bg-cloudy/5 hover:shadow-accent-dark/40'
          }>
          Register
        </button>
        <DisplayResponse isSuccess={isSuccess} data={data} />
      </form>
    </div>
  )
}
