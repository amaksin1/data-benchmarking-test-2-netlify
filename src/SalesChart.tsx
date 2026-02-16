import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { SalesData } from './types';

interface SalesChartProps {
  data: SalesData[];
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const formatCurrency = (value: number) => {
    return `$${(value / 1000).toFixed(0)}k`;
  };

  const chartData = data.map(item => ({
    ...item,
    dateFormatted: formatDate(item.date)
  }));

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '20px'
      }}>
        Revenue & Orders Trend
      </h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="dateFormatted" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            yAxisId="left"
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={formatCurrency}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={false}
            name="Revenue"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="orders" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={false}
            name="Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};