import { ConnectButton } from 'components/header/connectButton'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Vote, Home, List } from 'lucide-react'

export const Header = () => (
  <motion.div 
    className={'fixed top-0 w-full z-50'}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className={'w-full top-0 absolute h-[9vh] bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-xl border-b border-white/20'} />

    <div className={'absolute glass text-slate-800 flex flex-row w-full h-[9vh] items-center px-6 shadow-lg'}>
      <motion.div 
        className={'text-3xl font-bold mr-8 text-gradient flex items-center gap-2'}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Vote className="w-8 h-8 text-blue-600" />
        Electify
      </motion.div>

      <div className={'flex items-center space-x-6'}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href={'/'} 
            className={'flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium'}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href={'/elections'} 
            className={'flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200 font-medium'}
          >
            <List className="w-4 h-4" />
            Elections
          </Link>
        </motion.div>
      </div>

      <div className={'ml-auto'}>
        <ConnectButton />
      </div>
    </div>
  </motion.div>
)