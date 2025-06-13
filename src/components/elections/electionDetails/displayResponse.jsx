import { CheckCircle, AlertOctagon } from 'lucide-react'

export const DisplayResponse = ({ isSuccess, data }) => {
  if (!isSuccess || !data?.registerVoter) {
    return null
  }

  const { success, message } = data.registerVoter

  return (
    <div
      className={`flex items-center p-3 my-4 text-xs font-medium rounded-xl border-l-4 bg-cloudy/5 ${
        success ? 'text-green-700 border-green-500' : 'text-red-700 border-red-500'
      }`}>
      {success ? <CheckCircle className={'w-5 h-4 mr-2'} /> : <AlertOctagon className={'w-5 h-4 mr-2'} />}
      <span>{message}</span>
    </div>
  )
}
