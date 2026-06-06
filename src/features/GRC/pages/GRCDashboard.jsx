import React from 'react'
import DashboardCard from '../components/DashboardCard/DashboardCard'
import checkIcon from "../../../assets/checkIcon.png"
import crossIcon from "../../../assets/crossIcon.png"
import TimeIcon from "../../../assets/TimeIcon.png"
import CommentIcon from "../../../assets/CommentIcon.png"
import DashboardBarChart from '../components/DashboardBarChart/DashboardBarChart'
import DashboardPieChart from '../components/DashboardPieChart/DashboardPieChart'

export default function GRCDashboard() {

return <>
    
    <div>
        <h2 className='text-white mb-4 mb-lg-5'>
            GRC Dashboard
        </h2>
    </div>

    <div className='row g-3 mb-4 mb-lg-5'>

        <DashboardCard
            icon={checkIcon}
            Statistics={"84%"}
            text={"Overall Compliance"}
        />

        <DashboardCard
            icon={crossIcon}
            Statistics={"23"}
            text={"Non-Compliant Controls"}
        />

        <DashboardCard
            icon={TimeIcon}
            Statistics={"12"}
            text={"Remediation Tasks"}
        />

        <DashboardCard
            icon={CommentIcon}
            Statistics={"4"}
            text={"Active Audits"}
        />

    </div>

    <div className='row g-4 justify-content-between align-items-stretch mb-4 mb-lg-5 px-0 px-lg-3'>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 p-3 rounded-4'>
                <DashboardBarChart />
            </div>
        </div>

        <div className='col-12 col-lg-5'>
            <div className='dashboard-card h-100 d-flex justify-content-center align-items-center p-3 rounded-4'>
                <DashboardPieChart />
            </div>
        </div>

    </div>

</>
}