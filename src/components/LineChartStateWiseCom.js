import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

const LineChartStateWiseCom = (props) => {
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
                <YAxis type="number" domain={[0, 1000]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="AndhraPradesh" stroke="#EE82EE" />
                <Line type="monotone" dataKey="Gujarat" stroke="#4F42B5" />
                <Line type="monotone" dataKey="Maharastra" stroke="#FF00FF" />
                <Line type="monotone" dataKey="Delhi" stroke="#007bff" />
                <Line type="monotone" dataKey="MadhyaPradesh" stroke="#808000" />
                <Line type="monotone" dataKey="Rajsthan" stroke="#FF69B4" />
                <Line type="monotone" dataKey="TamilNadu" stroke="#FFA500" />
                <Line type="monotone" dataKey="UttarPradesh" stroke="#FF6347" />
                <Line type="monotone" dataKey="WestBengal" stroke="#808080" />
                <Line type="monotone" dataKey="Telangana" stroke="#A0522D" />
                <Line type="monotone" dataKey="Karnataka" stroke="#228B22" />
            </LineChart>
        </div>
    )
}

export default LineChartStateWiseCom;
