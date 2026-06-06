import React from 'react'
import "../styles/RemedationTabel.css"
export default function RemedationTabel() {
  return <>
  
  <div className='rounded-3 overflow-hidden'>
  <table className='w-100'>
    <thead>
        <tr>
            <th>Control ID</th>
            <th className=''>Finding</th>
            <th>Risk</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>A.6.1.2</td>
            <td>Segregation of duties not enforced for finance system admins.</td>
            <td className='risk-td high p-0'> <p>High</p></td>
            <td>Mohamed Atef (IT Manager)</td>
            <td>2025-11-15</td>
            <td className='risk-td meduim p-0'> <p>In Progress</p></td>
        </tr>
        <tr>
            <td>A.9.2.3</td>
            <td>Access reviews not performed quarterly as per policy.</td>
            <td className='risk-td meduim p-0'> <p>Medium</p></td>
            <td>Ahmed Nabil</td>
            <td>2025-11-10</td>
            <td className='risk-td high p-0'> <p>Open</p></td>
        </tr>
        <tr>
            <td>A.5.1.1</td>
            <td>Information security policy not reviewed in over 12 months.</td>
            <td className='risk-td meduim p-0'> <p>Medium</p></td>
            <td>Mostafa Essam (CISO)</td>
            <td>2025-11-01</td>
            <td className='risk-td high p-0'> <p>Open</p></td>
        </tr>
        <tr>
            <td>A.12.4.1</td>
            <td>Event logs for critical servers are not monitored.</td>
            <td className='risk-td high p-0'> <p>High</p></td>
            <td>Aly Hesham (IT Manager)</td>
            <td>2025-11-20</td>
            <td className='risk-td high p-0'> <p>Open</p></td>
        </tr>
        <tr>
            <td>A.8.2.1</td>
            <td>Media disposal policy is outdated.</td>
            <td className='risk-td low p-0'> <p>Low</p></td>
            <td>Sarah Chen (CISO)</td>
            <td>2025-10-30</td>
            <td className='risk-td green p-0'> <p>Completed</p></td>
        </tr>
    </tbody>
  </table>
  
  </div>
  
  </>
}
