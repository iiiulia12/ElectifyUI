import { ConnectButton } from 'components/header/connectButton'
import Link from 'next/link'

export const Header = () => (
  <div className={'sticky  flex flex-row w-full  h-[10vh] bg-midnight-blue/80 top-0 items-center justify-between '}>
    <div className={'ml-2 text-white/80 text-2xl'}> Electify.. </div>
    <button>
      <Link href={'/candidates'}>Candidates</Link>
    </button>
    <ConnectButton />
  </div>
)
