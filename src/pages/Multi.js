import React from 'react';
import { Line,Pie } from 'react-chartjs-2';
import "./Multi.css"

const state = {
    labels: ['open', 'bounce', 'unsubscribe'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
         
        ],
        data: [40, 20, 40,]
      }
    ]
  }
const data = {
  labels: ['9:00AM', '12":00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM','3:00AM','6:00AM'],
  datasets: [
    {
      label: 'open',
      data: [220, 400, 460, 500, 550,600,620,625],
      fill: false,
   
      backgroundColor: 'black',
      borderColor: 'black',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'click',
      data: [50, 100, 160, 200, 254, 300,320,400],
      fill: false,
   
      backgroundColor:  'orange',
      borderColor: 'orange',
      yAxisID: 'y-axis-1',
    },
    {
        label: 'click second time',
        data: [30, 80, 130, 190,230 , 270,300,350],
        fill: false,
       
        backgroundColor: 'green',
        borderColor: 'green',
        yAxisID: 'y-axis-1',
      },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

const MultiAxisLine = () => (
<div style={{padding:"40px",display:"flex"}}>
<div className="a">
  <div>
        <div>
        <div className='a'>
        <h3>Email Statistics</h3>
        <p>Last Campaign Performence</p>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Email Statistics',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
        <p>Camaign sent 2 days ago</p>
        </div>
        </div>
    </div>
  </div>  
  <div className="b">
    <div className="b">
        <div className='header'>
            <h3 className='title'>User Behaviour</h3>
            <p>24 Hours Performence </p>
         </div>
         <div >
            <Line data={data} options={options} />
        </div>
        <p>Updated 3 Minutes ago</p>
    </div>
  </div>
</div>

)
export default MultiAxisLine