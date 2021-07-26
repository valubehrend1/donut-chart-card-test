import React, { useState, useEffect } from 'react';
import './App.scss'
import DonutChartCard from './components/DonutChartCard'

 const App = () => {
  
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(
        (result) => {
          const mapCharts = result.profiles.map((profile) => {
            const chart = {title: profile.title, totalLabel: profile.totalLabel, series:[], labels:[]};
            profile.data.forEach((data)=> {
              chart.series.push(data.value)
              chart.labels.push(data.label)
            })
            return chart
          })
          setCharts(mapCharts)
        },
        (error) => {
          console.log(error)
        }
      )
  }, []);

  return (
    <div className="container">
      {charts.map((chart, i) => (
        <DonutChartCard key={i} {...chart} />
      ))}
    </div>
  )
}

export default App;
