import React from 'react'
import './chartBar.css'
function ChartBar(props) {
    let barHeight = "0%"
    if(props.maxvalue > 0){
        barHeight = Math.round((props.value / props.maxvalue)*100) + '%';
    }
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{'height': barHeight}}>
            </div>
        </div>
        <div className='chart-bar__label'><p>{ props.label}</p></div>
    </div>
  )
}

export default ChartBar