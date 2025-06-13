'use client'
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CHART_COLORS } from 'components/elections/results/utility/chartColor'
import { makeChartData } from 'components/elections/results/utility/makeChartData'

export const ResultsPieChart = ({ candidateResults }) => {
  const data = makeChartData(candidateResults)

  return (
    <div className={'w-full h-128 mb-8'}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey={'votes'}
            nameKey={'name'}
            outerRadius={'80%'}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
            {data.map((_, i) => (
              <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
            ))}
          </Pie>

          <Tooltip formatter={v => `${v} vote${v !== 1 ? 's' : ''}`} />
          <Legend layout={'vertical'} verticalAlign={'middle'} align={'right'} wrapperStyle={{ paddingLeft: 20 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
