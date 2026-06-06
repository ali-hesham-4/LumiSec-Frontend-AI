import React from 'react'
import AuditCard from '../components/AuditCard/AuditCard'
import AuditAccordion from '../components/AuditAccordion/AuditAccordion'

export default function GRCAudits() {

return <>
    
    <div className='ps-0'>

        <h2 className='text-white mb-5'>
            Active Audits
        </h2>

        <div className='mb-3'>

            <AuditCard
                title={"ISO 27001:2022 Audit - Q4 2025"}
                desc={"Assigned to: John Doe | Due: 2025-12-31"}
                progrssText={"Progress: 65%"}
            />

        </div>

        <AuditAccordion
            title={"A.5 Information security policies"}
            id={"collapseOne"}
        />

        <AuditAccordion
            title={"A.6 Organization of information security"}
            id={"collapsetwo"}
        />

    </div>

</>
}