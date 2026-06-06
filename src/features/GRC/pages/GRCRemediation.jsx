import React from 'react'
import AddTaskRemediationModal from '../components/TaskRemediationModal/AddTaskRemediationModal'
import RemedationTabel from '../components/RemedationTabel/RemedationTabel'

export default function GRCRemediation() {
return <>
    <div className='d-flex justify-content-between align-items-center mb-5'>
                <h1 className='text-white'>Standards Library</h1>
                <button className='btn add-btn text-white border-0' data-bs-toggle="modal" data-bs-target="#AddTaskRemediationModal"><i className="fa-solid fa-plus me-2"></i>Add Standard</button>
    </div>
    <div>
        <RemedationTabel />
    </div>


<AddTaskRemediationModal />

</>
}
