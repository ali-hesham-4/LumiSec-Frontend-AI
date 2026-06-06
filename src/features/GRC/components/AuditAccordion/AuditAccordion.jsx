import React, { useState } from 'react'
import "./AuditAccordion.css"

export default function AuditAccordion ({title , id}) {

const [isDown , setIsDown] = useState(true)

return <> 

<div id="accordion" className='mb-3'>

    <div className="card audit-accordion w-100">

        <div className="card-header" id="headingOne">

            <h5 className="mb-0">

                <div className='d-flex justify-content-between align-items-center gap-3'>

                    <button
                        onClick={()=>{
                            setIsDown(!isDown)
                        }}
                        className="btn btn-link text-decoration-none text-white w-100 text-start accordion-btn"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}`}
                        aria-expanded="true"
                        aria-controls={`#${id}`}
                    >
                        {title}
                    </button>

                    {
                        isDown
                        ?
                        <i className="fa-solid fa-angle-down accordion-icon"></i>
                        :
                        <i className="fa-solid fa-angle-up accordion-icon"></i>
                    }

                </div>

            </h5>

        </div>

        <div
            id={`${id}`}
            className="collapse"
            aria-labelledby="headingOne"
            data-parent={`#${id}`}
        >

            <div className="card-body ps-2 ps-md-4 ps-lg-5">

                <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3'>

                    <div className='d-flex justify-content-between align-items-start w-100'>

                        <div>

                            <h5 className='me-3 mb-1'>
                                A.6.1.1
                            </h5>

                            <p className='mb-0'>
                                Information security roles and responsibilities
                            </p>

                        </div>

                        <button className='bg-danger p-2 py-1 btn text-white flex-shrink-0'>
                            NC
                        </button>

                    </div>

                </div>

                <hr />

                <div className='d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3'>

                    <div className='d-flex justify-content-between align-items-start w-100'>

                        <div>

                            <h5 className='me-3 mb-1'>
                                A.6.1.2
                            </h5>

                            <p className='mb-0'>
                                Segregation of duties
                            </p>

                        </div>

                        <button className='p-2 py-1 btn text-white p-btn flex-shrink-0'>
                            P
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

</>
}