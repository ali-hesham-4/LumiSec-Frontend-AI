import React from 'react'
import DashboardCard from '../Components/DashboardCard/DashboardCard'
import { ArrowDown, ArrowUp, CircleCheck, Clock, Hourglass, OctagonAlert } from 'lucide-react'
import DashboardBarChart from '../Components/DashboardBarChart/DashboardBarChart'
import DashboardPieChart from '../Components/DashboardPieChart/DashboardPieChart'
import AnalystPerformance from '../Components/AnalystPerformance/AnalystPerformance'
import AutomatedPlayBook from '../Components/AutomatedPlayBook/AutomatedPlayBook'

export default function SoarAnalytics () {
  return <>
    
    <h2 className='text-white'>Analytics & Reporting</h2>
    <p className='text-secondary'>Historical analysis and performance metrics</p>
    
    <div className='row gy-3 align-items-center mb-5'>
        <DashboardCard
            icon={<Clock />}
            title={"Mean Time To Respond"}
            Statistics={"2h 15m"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-8%"}
            desc1={"vs last period"}
            text2= {"Average response time"} 
        />

        <DashboardCard
            icon={<Hourglass />}
            title={"Mean Time To Resolve"}
            Statistics={"8h 30m"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-12%"}
            desc1={"vs last period"}
            text2= {"Average response time"} 
        />

        <DashboardCard
            icon={<CircleCheck />}
            title={"Total Incidents Resolved"}
            Statistics={"1,450"}
            arrow={<ArrowUp  size={20} color='green'/>}
            arrowDirection={"up"}
            text1={"+13%"}
            desc1={"vs last period"}
            text2= {"Successfully closed"} 
        />

        <DashboardCard
            icon={<OctagonAlert color='#f6cc3b'/>}
            title={"False Positive Rate"}
            Statistics={"22%"}
            arrow={<ArrowDown  size={20} color='red'/>}
            arrowDirection={"down"}
            text1={"-8%"}
            desc1={"vs last period"}
            text2= {"Accuracy improvement"} 
        />

        <DashboardCard
            icon={<div class="fa-solid fa-gears"></div>}
            title={"Automation ROI"}
            Statistics={"420h"}
            arrow={<ArrowUp  size={20} color='green'/>}
            arrowDirection={"up"}
            text1={"+28%"}
            desc1={"vs last period"}
            text2= {"Hours saved"} 
        />

    </div>

    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 px-0'>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 p-3 rounded-4'>
                <DashboardBarChart />
            </div>
        </div>

        <div className='col-12 col-lg-6'>
            <div className='dashboard-card h-100 d-flex justify-content-center align-items-center p-3 rounded-4'>
                <DashboardPieChart />
            </div>
        </div>

    </div>

    <div className='row g-3 justify-content-between align-items-stretch mb-4 mb-lg-5 px-lg-3'>
        <div className='col-12 col-lg-6 row g-3 align-items-stretch'>
            <AnalystPerformance />
        </div>

        <div className='col-12 col-lg-6 row g-3 align-items-stretch'>
            <AutomatedPlayBook />
        </div>

    </div>

  </>
}
