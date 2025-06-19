import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { makeChartData } from 'components/elections/results/utility/makeChartData'
import { GradientElement } from 'components/home/gradientElement'

const chartContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const ResultsBarChart = ({ candidateResults }) => {
  const data = makeChartData(candidateResults)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          className={'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-white'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
          <p className={'font-semibold'}>{label}</p>
          <p className={'text-blue-100'}>Votes: {payload[0].value}</p>
        </motion.div>
      )
    }

    return null
  }

  return (
    <motion.div
      className={'mt-16 mb-16'}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div className={'text-center mb-8'} variants={titleVariants}>
        <h2
          className={
            'text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-2'
          }>
          Vote Distribution
        </h2>
        <GradientElement />
      </motion.div>

      <motion.div
        className={'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'}
        variants={chartContainerVariants}>
        <div className={'w-full h-96'}>
          <ResponsiveContainer>
            <BarChart data={data} layout={'vertical'} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray={'3 3'} stroke={'rgba(255,255,255,0.1)'} />
              <XAxis
                type={'number'}
                allowDecimals={false}
                domain={[0, 'dataMax']}
                tick={{ fill: '#cbd5e1', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              />
              <YAxis
                dataKey={'name'}
                type={'category'}
                width={120}
                tick={{ fill: '#cbd5e1', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                tickLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Bar dataKey={'votes'} fill={'#006c9e'} barSize={30} radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  )
}
