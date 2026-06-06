import React from "react";
import IncidentTable from "../Components/IncidentTable/IncidentTable";
import PlaybookCard from "../Components/PlaybookCard/PlaybookCard";
import ThreatFeedCard from "../Components/ThreatFeedCard/ThreatFeedCard";
import RiskCard from "../Components/RiskCard/RiskCard";
import "./IncidentsQueue.css";
import useIncidentsQueue from "../Hooks/useIncidentsQueue";
import StatsCard from "../Components/StatsCard/StatsCard";

export default function IncidentQueue() {

  const {stats, findings, loading, error,} = useIncidentsQueue()

  return (
    <div className="dashboard-container p-3">

      <div className="row g-3">

        <div className="col-lg-9">

          <div className="row g-3">
            

          {stats.map((stat) => (
              <StatsCard
                key={stat.id}
                title={stat.title}
                change={stat.change}
                type={stat.type}
                value={stat.value}
              />
            ))}

          </div>

          <div className="mt-3">
            <IncidentTable />
          </div>

        </div>

        <div className="col-lg-3">

          <div className="d-flex flex-column gap-3">
            <PlaybookCard />
            <ThreatFeedCard />
            <RiskCard />
          </div>

        </div>

      </div>

    </div>
  );
}