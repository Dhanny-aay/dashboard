import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

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
    labels: ["Jan", "Mar", "May", "July", "Aug", "Oct", "Nov"],
    datasets:[{
        data:[3, 15, 20, 18, 
            30, 35, 48],
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
            max:50,
            ticks: {
                stepSize:10,
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


const mchart = () => {
    return ( 
        <motion.div 
        initial={{opacity: 0}}
        animate={{ opacity:1 }}
        transition={{ type:'tween', duration:1 }}
        className=" text-white font-montserrat w-full text-xs font-medium">
            <Line data={data} options={options}></Line>
        </motion.div>
     );
}
 
export default mchart;