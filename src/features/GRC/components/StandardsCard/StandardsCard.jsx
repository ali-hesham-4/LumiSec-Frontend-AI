import React from 'react'
import "./StandardsCard.css"

export default function StandardsCard({
    backgroundColor,
    type,
    title,
    desc,
    progressTitle,
    progressPercent,
    Controls
}) {

return<>
    
    <div className='col-12 col-sm-6 col-xl-3'>

        <div className='standards-card rounded-3'>

            <div className='p-3'>

                <div className='d-flex align-items-center flex-wrap gap-2 mb-2'>

                    <p
                        className='text-white standards-type p-2 rounded-2 mb-0'
                        style={{backgroundColor: `${backgroundColor}`}}
                    >
                        {type}
                    </p>

                    <p className='text-white standards-card-title mb-0'>
                        {title}
                    </p>

                </div>

                <p className='mb-3'>
                    {desc}
                </p>

                <p>
                    {progressTitle}
                </p>

                <div className="progress">

                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: `${progressPercent}`}}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>

                </div>

            </div>

            <hr className='hr-line' />

            <p className='mb-0 ps-3 pb-3'>
                {Controls}
            </p>

        </div>

    </div>

</>
}