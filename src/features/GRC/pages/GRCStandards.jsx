import React from 'react'
import StandardsCard from '../components/StandardsCard/StandardsCard'
import "./GRCStandards.css"
import AddStandardModal from '../components/StandardModal/AddStandardModal'

export default function GRCStandards() {

return <>
    
    <div>

        <div className='d-flex justify-content-between align-items-center mb-4 mb-lg-5 standards-header gap-3'>

            <h1 className='text-white mb-0'>
                Standards Library
            </h1>

            <button
                className='btn add-btn text-white border-0'
                data-bs-toggle="modal"
                data-bs-target="#addStandardModal"
            >
                <i className="fa-solid fa-plus me-2"></i>
                Add Standard
            </button>

        </div>

        <div className='row g-4'>

            <StandardsCard
                backgroundColor={"#7F56D9"}
                type={"ISO"}
                title={"ISO 27001:2022"}
                desc={"The international standard for Information Security Management Systems (ISMS)."}
                progressTitle={"Overall Compliance: 85%"}
                progressPercent={"85%"}
                Controls={"93 Controls"}
            />

            <StandardsCard
                backgroundColor={"#539BFF"}
                type={"PCI"}
                title={"PCI-DSS v4.0"}
                desc={"Payment Card Industry Data Security Standard for handling cardholder data."}
                progressTitle={"Overall Compliance: 72%"}
                progressPercent={"72%"}
                Controls={"~250 Controls"}
            />

            <StandardsCard
                backgroundColor={"#059669"}
                type={"SOC 2"}
                title={"ISO 27001:2022"}
                desc={"A framework for managing customer data based on Trust Service Criteria (TSC)."}
                progressTitle={"Overall Compliance: 91%"}
                progressPercent={"91%"}
                Controls={"64 Controls (Common Criteria)"}
            />

            <StandardsCard
                backgroundColor={"#F79009"}
                type={"NIST"}
                title={"NIST CSF 1.1"}
                desc={"The NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover)."}
                progressTitle={"Overall Compliance: 65%"}
                progressPercent={"65%"}
                Controls={"108 Subcategories"}
            />

        </div>

    </div>

    <AddStandardModal />

</>
}