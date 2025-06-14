'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { makeChartData } from 'components/elections/results/utility/makeChartData'

const CHART_COLORS = [
  '#60a5fa', // blue-400
  '#a855f7', // purple-500
  '#06b6d4', // cyan-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#ef4444', // red-500
  '#8b5cf6', // violet-500
  '#f97316' // orange-500
]

const chartContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0,
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
      delay: 0.8,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const legendVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const legendItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export const ResultsPieChart = ({ candidateResults }) => {
  const data = makeChartData(candidateResults)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          className={'bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-white'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>
          <p className={'font-semibold'}>{payload[0].name}</p>
          <p className={'text-blue-100'}>
            {payload[0].value} vote{payload[0].value !== 1 ? 's' : ''}
          </p>
        </motion.div>
      )
    }

    return null
  }

  const CustomLegend = ({ payload }) => (
    <motion.div
      className={'flex flex-wrap justify-center gap-4 mt-8'}
      variants={legendVariants}
      initial={'hidden'}
      animate={'visible'}>
      {payload.map((entry, index) => (
        <motion.div key={index} className={'flex items-center space-x-2'} variants={legendItemVariants}>
          <motion.div
            className={'w-3 h-3 rounded-full'}
            style={{ backgroundColor: entry.color }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
          <span className={'text-blue-100/80 text-sm'}>{entry.value}</span>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <motion.div className={'mb-16'} initial={'hidden'} whileInView={'visible'} viewport={{ once: true, amount: 0.3 }}>
      <motion.div className={'text-center mb-8'} variants={titleVariants}>
        <h2
          className={
            'text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-2'
          }>
          Vote Breakdown
        </h2>
        <motion.div
          className={'w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full'}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        className={'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'}
        variants={chartContainerVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}>
        <div className={'w-full h-128'}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey={'votes'}
                nameKey={'name'}
                cx={'50%'}
                cy={'50%'}
                outerRadius={120}
                innerRadius={60}
                paddingAngle={2}
                label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
                labelLine={false}
                animationBegin={1200}
                animationDuration={1000}>
                {data.map((_, i) => (
                  <Cell
                    key={i}
                    fill={CHART_COLORS[i % CHART_COLORS.length]}
                    stroke={'rgba(255,255,255,0.1)'}
                    strokeWidth={1}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  )
}
