import React from 'react';
import {Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
 

const state = {
  labels: ['Mon', 'Tus', 'Wed',
           'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Activity',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgb(0 0 0 )',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 87, 20]
    }
  ]
}
export default class Charts extends React.Component {
    render() {
        return (
            <div>
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>)
    
    }
}



