import { CheckCircle, PlayCircle, Vote } from 'lucide-react'

export const electionCardSettings = pct => {
  if (pct === 0) {
    return {
      status: 'Upcoming',
      icon: PlayCircle,
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30'
    }
  } else if (pct === 100) {
    return {
      status: 'Completed',
      icon: CheckCircle,
      color: 'text-green-400',
      borderColor: 'border-green-400/30'
    }
  } else {
    return {
      status: 'Active',
      icon: Vote,
      color: 'text-orange-400',
      borderColor: 'border-orange-400/30'
    }
  }
}
