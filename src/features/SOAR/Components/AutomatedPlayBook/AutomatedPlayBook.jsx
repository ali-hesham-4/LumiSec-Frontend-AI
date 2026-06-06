import React from 'react'
import "./AutomatedPlayBook.css"
import { Bug, Network, UserLock } from 'lucide-react'

export default function AutomatedPlayBook() {
  return <>
  
  <div className='AutomatedPlayBook-card rounded-3 p-3 w-100'>

<div className='d-flex justify-content-between align-items-center'>
    <h3 className='text-white mb-3'>Top Automated Playbooks</h3>
    <p className='AutomatedPlayBook-view-all'>View All</p>
</div>

<table className='AutomatedPlayBook w-100'>
    <thead>
        <tr>
            <th>Playbook Name</th>
            <th>Times Executed</th>
            <th>Time Saved</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                <div>
                    <i class="fa-solid fa-envelope-open-text me-2 fs-5" style={{color: "#3B82F6"}}></i>
                </div>
                <p className='mb-0'>Phishing Email Response</p>
                </div>
            </td>
            <td>284</td>
            <td>142h</td>
        </tr>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <div>
                        <i class="fa-solid fa-shield-virus me-2 fs-5" style={{color: "#EF4444"}}></i>
                    </div>
                    <p className='mb-0'>Malware Containment</p>
                </div>
            </td>
            <td>156</td>
            <td>89h</td>
        </tr>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <UserLock color='#A855F7' className='me-2' />
                    <p className='mb-0'>Account Lockout</p>
                </div>
            </td>
            <td>128</td>
            <td>64h</td>
        </tr>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <Network color='#F59E0B' className='me-2' />
                    <p className='mb-0'>Network Isolation</p>
                </div>
            </td>
            <td>97</td>
            <td>58h</td>
        </tr>
        <tr>
            <td>
                <div className='d-flex align-items-center'>
                    <Bug color='#10B981' className='me-2' />
                    <p className='mb-0'>Vulnerability Scan</p>
                </div>
            </td>
            <td>73</td>
            <td>67h</td>
        </tr>
    </tbody>

</table>

</div>
  
  </>
}
