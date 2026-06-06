import React from 'react'
import "./DashboardCard.css"

export default function DashboardCard({icon , title , Statistics , arrow , arrowDirection , text1 , desc1 , text2 }) {

return<>
    
    <div className='col-12 col-sm-6 col-xl'>

        <div className='rounded-4 dashboard-card p-3 py-4 h-100'>

            <div className='d-flex align-items-center mb-2'>
                <i className='me-2'>{icon}</i>
                <p className='mb-0'>{title}</p>
            </div>

            <div className='overflow-hidden'>

                <h4 className='Statistics text-white mb-1'>
                    <span>{Statistics}</span>
                </h4>

                <div className='d-flex align-items-center'> 
                    <i>{arrow}</i>
                    <p className='text m-0'>
                        <span className={`${arrowDirection} me-1`}>{text1}</span>{desc1}
                    </p>
                </div>

                <p className='text mb-2 ms-0'>
                    {text2}
                </p>

            </div>

        </div>

    </div>

</>
}