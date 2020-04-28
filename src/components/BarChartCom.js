import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const BarChartCom = (props) => {
    const { timeSeries, title } = props;
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', color: '#6c757d' }}>{title}</p>
            </div>
            <BarChart
                width={500}
                height={300}
                data={timeSeries}
                margin={{
                    top: 5, right: 20, left: 20, bottom: 20,    
                }}
            >
                <XAxis dataKey="date" />
                <YAxis type="number" domain={[0, 2500]}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="dailyconfirmed" stroke="#ff073a" />
                <Bar dataKey="dailyrecovered" stroke="#28a745" />
                <Bar dataKey="dailydeceased" stroke="#6c757d" />
            </BarChart>
        </div>
    )
}

export default BarChartCom;
