'use client'

import { useState, useEffect } from 'react'
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

interface ClinicalHistoryChartProps {
  data: {
    id: string
    created_at: string
    total_score: number
    assessment_type: string
  }[]
  type: 'PHQ9' | 'GAD7'
}

export default function ClinicalHistoryChart({ data, type }: ClinicalHistoryChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex items-center justify-center h-72 animate-pulse">
        <div className="w-full h-full bg-slate-50 rounded-xl"></div>
      </div>
    )
  }

  const chartData = data
    .filter(d => d.assessment_type === type)
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .map(d => ({
      date: format(new Date(d.created_at), 'MMM d'),
      score: d.total_score,
      fullDate: format(new Date(d.created_at), 'PPP'),
    }))

  if (chartData.length === 0) {
    return (
      <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex items-center justify-center h-48">
        <p className="text-slate-400 text-sm font-medium">No {type} assessments recorded yet.</p>
      </div>
    )
  }

  const maxScore = type === 'PHQ9' ? 27 : 21
  const label = type === 'PHQ9' ? 'Depression (PHQ-9)' : 'Anxiety (GAD-7)'
  const color = type === 'PHQ9' ? '#3b82f6' : '#8b5cf6'

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100"
    >
      <div className="mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 rounded-lg" tabIndex={0} aria-label={`${label} Progress Chart`}>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{label} Trends</h3>
        <p className="text-sm text-slate-500">
          Lower scores indicate fewer symptoms. Max score: {maxScore}.
        </p>
      </div>

      <div className="h-56 w-full" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              dy={10}
            />
            <YAxis 
              domain={[0, maxScore]} 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 11, fill: '#94a3b8' }}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
              labelStyle={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '4px' }}
              formatter={(value: any) => [`Score: ${value}`, '']}
              labelFormatter={(label, payload) => payload?.[0]?.payload?.fullDate || label}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke={color} 
              strokeWidth={3}
              dot={{ fill: color, strokeWidth: 2, r: 4, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
