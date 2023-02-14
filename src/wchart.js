import { Line } from "react-chartjs-2";

import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
ChartJS.defaults.color = '#000';

const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    datasets:[{
        data:[0, 0.8, 2, 1.8, 
            3, 3.5, 3.8],
        backgroundColor:'transparent',
        borderColor:'#000',
        color:'#000',
        pointBorderColor:'transparent',
        pointBorderWidth: 4,
        tension:0.5
    }]
};
const options = {
    plugins: {
        legend: false 
    },
    scales: {
        x:{
            grid: {
                display:false
            }
        },
        y:{
            min:0,
            max:5,
            ticks: {
                stepSize:1,
                callback: (value) => value + 'K'
            },
            grid:{
                borderDash:[10]
            },
            font: {
                size: 12
            }
        }
    },
    layout:{
        padding:{
        
        }
    }

};


const wchart = () => {
    return ( 
        <div className=" text-white font-montserrat w-full text-xs font-medium">
            <Line data={data} options={options}></Line>
        </div>
     );
}
 
export default wchart;