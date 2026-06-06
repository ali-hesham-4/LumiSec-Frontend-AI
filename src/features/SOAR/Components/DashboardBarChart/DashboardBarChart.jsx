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
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

        datasets: [
            {
                label: "Medium",
                data: [0, 0, 0, 50],
                backgroundColor: "#10B981",
                borderRadius: { topRight: 0, topLeft: 0, bottomRight: 0, bottomLeft: 0 } 
            },
            {
                label: "High",
                data: [0, 0, 0, 40],
                backgroundColor: "#F59E0B",
                borderRadius: { topRight: 0, topLeft: 0, bottomRight: 0, bottomLeft: 0 }
            },
            {
                label: "Critical",
                data: [0, 0, 0, 20],
                backgroundColor: "#EF4444",
                borderRadius: { topRight: 8, topLeft: 8, bottomRight: 0, bottomLeft: 0 }
            },
        ],
    };

    return <>
        <div className='w-100 chart-container pb-5'>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ color: 'white', marginBottom: "30px", fontSize: '20px' }}>Incidents Over Time</h3>
        </div>


        <Bar
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 50 
                        }
                    },
                },

                scales: {
                    x: {
                        stacked: true,
                        grid: { display: false }
                    },
                    y: {
                        stacked: true,
                        min: 0,
                        max: 120,
                        ticks: { stepSize: 20 }
                    },
                },
            }}
        />
        </div>
    </>
}