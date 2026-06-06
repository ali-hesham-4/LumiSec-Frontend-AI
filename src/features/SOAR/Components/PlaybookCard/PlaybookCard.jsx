import React from "react";

export default function PlaybookCard() {
  return (
    <div className="dashboard-card side-card">

      <h6 className="card-title-small">
        LIVE PLAYBOOK STREAM
      </h6>

      <div className="mb-3">

        <small>Containment: SRV-01</small>

        <div className="progress mt-1">
          <div
            className="progress-bar"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>

      </div>

      <div>
        <small>Email Triage Flow</small>
        <p className="text-success small mb-0">
          Status: 42 Malicious Links Purged
        </p>
      </div>

    </div>
  );
}