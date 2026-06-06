import React from "react";

export default function RiskCard() {
  return (
    <div className="dashboard-card side-card">

      <h6 className="card-title-small">
        ASSET RISK CONTEXT
      </h6>

      <h1 className="text-danger text-center">
        88%
      </h1>

      <p className="small text-center mb-0">
        SRV-01 Security Score
      </p>

    </div>
  );
}