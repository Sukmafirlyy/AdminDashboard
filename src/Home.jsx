
import React from 'react'
import { MdOutlineSpeed, MdHistory, MdQuestionMark, MdTrain, MdLocationOn } from 'react-icons/md'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import GaugeComponent from 'react-gauge-component'

function Home() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h1>DASHBOARD</h1>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Speed Rated</h3>
            <MdOutlineSpeed className='card_icon' />
          </div>
          <h3>300</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Train Position</h3>
            <MdTrain className='card_icon' />
          </div>
          <h3>33</h3>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Blocking</h3>
            <MdLocationOn className='card_icon' />
          </div>
          <h3>42</h3>
        </div>
      </div>
      <div className='charts-wrapper'>
        <div className='line-chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='gauge-chart'>
          <GaugeComponent arc={{
            subArcs: [
              {
                limit: 20,
                color: '#EA4228',
                showTick: true
              },
              {
                limit: 40,
                color: '#F58B19',
                showTick: true
              },
              {
                limit: 60,
                color: '#F5CD19',
                showTick: true
              },
              {
                limit: 100,
                color: '#5BE12C',
                showTick: true
              },
            ]
          }}
            value={50} />
        </div>
      </div>
    </main>
  )
}
export default Home
