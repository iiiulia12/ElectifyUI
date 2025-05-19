import { ConnectButton } from 'components/header/connectButton'
import Link from 'next/link'

export const Header = () => (
  <div className={'fixed top-0 w-full z-50'}>
    <div className={'w-full top-0 absolute h-[9vh]  backdrop-blur-sm'} />

    <div
      className={
        ' absolute bg-cloudy/40 text-blackish-blue/70 flex flex-row w-full rounded-b-xl h-[9vh] items-center px-6'
      }>
      <div className={'text-2xl font-bold mr-8'}>Electify</div>

      <div className={'flex items-center space-x-4'}>
        <Link href={'/'} className={'hover:text-white transition-colors'}>
          Home
        </Link>
        <Link href={'/elections'} className={'hover:text-neutral-300 transition-colors'}>
          Elections
        </Link>
        <Link href={'/candidates'} className={'hover:text-neutral-300 transition-colors'}>
          Candidates
        </Link>
        <Link href={'/results'} className={'hover:text-neutral-300 transition-colors'}>
          Results
        </Link>
      </div>

      <div className={'ml-auto'}>
        <ConnectButton />
      </div>
    </div>
  </div>
)
