import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { makeChartData } from 'components/elections/results/utility/makeChartData'

export const ResultsBarChart = ({ candidateResults }) => {
  const data = makeChartData(candidateResults)

  return (
    <div className={'w-full h-96 my-12'}>
      <ResponsiveContainer>
        <BarChart data={data} layout={'vertical'} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray={'3 3'} />
          <XAxis type={'number'} allowDecimals={false} domain={[0, 'dataMax']} />
          <YAxis dataKey={'name'} type={'category'} width={80} tick={{ fill: '#334155', fontSize: 14 }} />
          <Tooltip />
          <Bar dataKey={'votes'} fill={'#f59e0b'} barSize={20} radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
