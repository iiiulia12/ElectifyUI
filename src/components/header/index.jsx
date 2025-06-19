import { ConnectButton } from 'components/header/connectButton'
import Link from 'next/link'

export const Header = () => (
  <div className={'fixed top-0 w-full z-50'}>
    <div className={'w-full top-0 absolute h-[9vh]  backdrop-blur-sm'} />

    <div className={' absolute bg-cloudy/10 text-cloudy flex flex-row w-full  h-[9vh] items-center px-6'}>
      <div
        className={
          'text-2xl rounded-lg px-4  border-mr-8 text-transparent bg-gradient-to-r from-deep-ocean  to-deep-ocean/60 bg-clip-text font-extrabold'
        }>
        Electify
      </div>

      <div className={'flex items-center space-x-4 text-lg'}>
        <Link href={'/'} className={'hover:text-deep-ocean transition-colors'}>
          Home
        </Link>
        <Link href={'/elections'} className={'hover:text-deep-ocean transition-colors'}>
          Elections
        </Link>
      </div>

      <div className={'ml-auto'}>
        <ConnectButton />
      </div>
    </div>
  </div>
)
