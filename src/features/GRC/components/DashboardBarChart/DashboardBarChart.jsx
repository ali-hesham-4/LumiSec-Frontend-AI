import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function DashboardBarChart() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr"],

        datasets: [
            {
                label: "Audits",
                data: [12, 19, 3, 5],
                backgroundColor: "#4F46E5",
            },
        ],
    };

return <>
    
    <div className='w-100 chart-container'>
        <Bar
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false,
            }}
        />
    </div>

</>
}