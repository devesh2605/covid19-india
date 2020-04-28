import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const LineChartCom = (props) => {
    const { timeSeries, title } = props;
    return (
        <div>
            <div style={{textAlign:'center'}}>
                <p style={{fontWeight:'bold', color:'#6c757d'}}>{title}</p>
            </div>
            <LineChart
                width={500}
                height={300}
                data={timeSeries}
                margin={{
                    top: 5, right: 20, left: 20, bottom: 20,
                }}
            >
                <XAxis dataKey="date" />
                <YAxis type="number" domain={[0, 40000]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalconfirmed" stroke="#ff073a" />
                <Line type="monotone" dataKey="totalrecovered" stroke="#28a745" />
                <Line type="monotone" dataKey="totaldeceased" stroke="#6c757d" />
            </LineChart>
        </div>
    )
}

export default LineChartCom;
