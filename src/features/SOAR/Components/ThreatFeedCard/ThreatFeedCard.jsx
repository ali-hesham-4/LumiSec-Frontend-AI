import React from "react";

export default function ThreatFeedCard() {
  return (
    <div className="dashboard-card side-card">

      <h6 className="card-title-small">
        GLOBAL THREAT INTEL FEED
      </h6>

      <p className="small text-danger">
        URGENT: New Zero-day targeting
        Civic VPN gateways.
      </p>

      <p className="small text-secondary mb-0">
        UPDATE: BlackByte group shifting
        to new C2 infrastructure.
      </p>

    </div>
  );
}