'use client';
import { Bar } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js'
import Text from '@/components/Text';
import Column from '@/components/Column';


Chart.register(CategoryScale, LinearScale, BarElement)
const labels = ['11', "470", "25", "16", "5", "23"];
const data = {
       labels: labels,
       datasets: [{
       label: 'dataset1',

       data: [14, 10, 9, 7, 6, 6],
       backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
       ],
       borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
              ],
       borderWidth: 1
       }, 
      ]
};

const BarChart = () => {
    return (
       <Column style={{"width": "600px", "height": "200px"}}>
              <Text text="Bus lines with most complaints" bold/>
              <Bar
               data={data}
               options={{
               maintainAspectRatio: false
               }}
              />
       </Column>
    );
        
};

export default BarChart