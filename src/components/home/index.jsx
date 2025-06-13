import React from 'react'
import { Card } from 'components/home/card'
import agreement from 'components/assets/agreement-svgrepo-com.svg'
import vote from 'components/assets/vote-svgrepo-com.svg'
import list from 'components/assets/election-checklist-symbol-svgrepo-com.svg'
import { Container } from 'components/home/container'
import { motion } from 'framer-motion'
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export const HomeComponent = () => (
  <Container css={'p-10 overflow-hidden'}>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl float-animation" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className={'text-5xl font-bold text-gradient mb-6 leading-tight'}>
          Welcome to Electify
        </h1>
        <motion.p 
          className={'text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed'}
          variants={itemVariants}
        >
          The Future of Democratic Participation
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-2 text-lg text-slate-500"
          variants={itemVariants}
        >
          <Shield className="w-5 h-5 text-blue-500" />
          Secure • Transparent • Decentralized
        </motion.div>
      </motion.div>

      <motion.div 
        className={'grid grid-cols-1 md:grid-cols-3 gap-8'}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Card
            title={'Unbreakable Security'}
            description={'Advanced cryptographic protocols ensure every vote is protected by military-grade encryption and blockchain immutability.'}
            icon={<Shield className="w-8 h-8 text-blue-500" />}
            gradient="from-blue-500 to-cyan-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title={'Complete Privacy'}
            description={'Zero-knowledge proofs guarantee your vote remains completely anonymous while maintaining full verifiability.'}
            icon={<Lock className="w-8 h-8 text-purple-500" />}
            gradient="from-purple-500 to-pink-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card
            title={'Instant Results'}
            description={'Smart contracts automatically process votes and deliver real-time results with mathematical precision.'}
            icon={<Zap className="w-8 h-8 text-amber-500" />}
            gradient="from-amber-500 to-orange-500"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        variants={itemVariants}
      >
        <motion.button
          className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Elections
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  </Container>
)