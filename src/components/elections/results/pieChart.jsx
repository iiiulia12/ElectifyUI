'use client'
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CHART_COLORS } from 'components/elections/results/chartColor'

export const ResultsPieChart = ({ candidateResults }) => {
  const data = candidateResults.map(c => ({
    name: `${c.firstName} ${c.lastName}`,
    value: c.votes
  }))

  return (
    <div className={'w-full h-128'}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey={'value'}
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
