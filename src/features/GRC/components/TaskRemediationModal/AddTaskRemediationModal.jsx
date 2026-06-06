import React from 'react'
import "./AddTaskRemediationModal.css"
import { Upload } from 'lucide-react'

export default function AddTaskRemediationModal() {

return <>
  
<div
    className="modal fade"
    id="AddTaskRemediationModal"
    tabIndex="-1"
    aria-hidden="true"
>

    <div className="modal-dialog modal-dialog-centered" role="document">

        <div className="modal-content">

            <div className="modal-header border-0">

                <h5 className="modal-title text-white">
                    Add Task
                </h5>

                <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>

            </div>

            <div className="modal-body border-0">

                <form action="">

                    <label htmlFor="select" className='d-block mb-2'>
                        Select from Library
                    </label>

                    <select
                        id='select'
                        className='form-control form-select bg-dark text-white mb-3 border-0'
                    >
                        <option value="" selected disabled>
                            -- Choose a framework --
                        </option>
                    </select>

                    <p className='text-secondary text-center position-relative sepration-text'>
                        OR
                    </p>

                    <label htmlFor="Upload" className="mb-3">
                        Upload Custom Framework
                    </label>

                    <div className="upload-box">

                        <label htmlFor="Upload" className="upload-label">

                            <Upload size={40} className='mb-3' />

                            <small className="text-secondary">
                                Click to browse or drag & drop (.xlsx, .csv)
                            </small>

                        </label>

                        <input
                            id="Upload"
                            type="file"
                            className="d-none"
                        />

                    </div>

                </form>

            </div>

            <div className="modal-footer border-0">

                <button
                    type="button"
                    className="btn btn-primary"
                >
                    Cancel
                </button>

                <button className='btn add-btn text-white border-0'>
                    Add Task
                </button>

            </div>

        </div>

    </div>

</div>
  
</>
}