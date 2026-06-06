import React from 'react'
import "./DashboardCard.css"

export default function DashboardCard({icon , Statistics , text }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl-3'>

        <div className='d-flex align-items-center rounded-4 dashboard-card p-3 py-4 h-100'>

            <figure className='me-3 mb-0 dashboard-card-image'>

                <img
                    src={icon}
                    className='w-100'
                    alt="checkIcon"
                />

            </figure>

            <div className='overflow-hidden'>

                <h4 className='Statistics text-white mb-1'>
                    {Statistics}
                </h4>

                <p className='text m-0'>
                    {text}
                </p>

            </div>

        </div>

    </div>

</>
}