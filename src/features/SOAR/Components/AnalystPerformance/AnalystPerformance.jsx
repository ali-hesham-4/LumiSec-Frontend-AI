import React from 'react'
import profileImage from "../../../../assets/prrofile.png"
import "./AnalystPerformance.css"
export default function AnalystPerformance() {
  return <>
  
  <div className='AnalystPerformanceTabel-card rounded-3 p-3 w-100'>

    <div className='d-flex justify-content-between align-items-center'>
        <h3 className='text-white mb-3'>Analyst Performance</h3>
        <p className='AnalystPerformanceTabel-view-all'>View All</p>
    </div>

    <table className='AnalystPerformanceTabel'>
        <thead>
            <tr>
                <th>Analyst Name</th>
                <th>Incidents Resolved Avg</th>
                <th>Avg. Response Time</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img className='rounded-circle w-100' src={profileImage} alt="profileImage" />
                        </figure>
                        <p className='mb-0'>Mostafa Essam</p>
                    </div>
                </td>
                <td>156</td>
                <td>1h 45m</td>
            </tr>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img className='rounded-circle w-100' src={profileImage} alt="profileImage" />
                        </figure>
                        <p className='mb-0'>Aly Hisham</p>
                    </div>
                </td>
                <td>142</td>
                <td>2h 12m</td>
            </tr>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img className='rounded-circle w-100' src={profileImage} alt="profileImage" />
                        </figure>
                        <p className='mb-0'>Ahmed Nabil</p>
                    </div>
                </td>
                <td>138</td>
                <td>2h 28m</td>
            </tr>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img className='rounded-circle w-100' src={profileImage} alt="profileImage" />
                        </figure>
                        <p className='mb-0'>Mahmoud Yousef</p>
                    </div>
                </td>
                <td>129</td>
                <td>2h 55m</td>
            </tr>
            <tr>
                <td>
                    <div className='d-flex align-items-center'>
                        <figure className='mb-0 me-2'>
                            <img className='rounded-circle w-100' src={profileImage} alt="profileImage" />
                        </figure>
                        <p className='mb-0'>Abdelrhman Shabrawy</p>
                    </div>
                </td>
                <td>115</td>
                <td>3h 18m</td>
            </tr>
        </tbody>

    </table>
  
  </div>
  
  </>
}
