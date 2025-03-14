import { ConnectButton } from 'components/header/connectButton'
import Link from 'next/link'

export const Header = () => (
  <div className={'sticky top-0 relative'}>
    <div className={' top-0  h-[14vh]  blur-xl bg-midnight-blue/70'} />
    <div className={'w-full top-0 absolute h-[9vh]  backdrop-blur-sm '} />

    <div
      className={
        'absolute text-white/80 flex flex-row w-full rounded  h-[9vh] bg-midnight-blue/60 top-0 items-center justify-between '
      }>
      <div className={'ml-2  text-2xl'}> Electify..</div>
      <button>
        <Link href={'/candidates'}>Candidates</Link>
      </button>
      <button>
        <Link href={'/elections'}>Elections</Link>
      </button>
      <ConnectButton />
    </div>
  </div>
)
