
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
    name: string;
    appearances: number;
}

interface SummaryChartProps {
    data: ChartData[];
}

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-base-300 p-3 border border-base-100 rounded-lg shadow-lg">
          <p className="font-bold text-content-100">{label}</p>
          <p className="text-brand-secondary">{`Apariciones: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
};

const SummaryChart: React.FC<SummaryChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: -10,
                    bottom: 5,
                }}
                barSize={40}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" tick={{ fill: '#4b5563' }} tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} tick={{ fill: '#4b5563' }} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(59, 130, 246, 0.1)'}} />
                <Legend wrapperStyle={{ color: '#111827' }} />
                <Bar dataKey="appearances" name="Apariciones" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SummaryChart;
   