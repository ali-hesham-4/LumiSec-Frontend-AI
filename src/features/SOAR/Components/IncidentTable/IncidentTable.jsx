import React from "react";

export default function IncidentTable() {
  return (
    <div className="dashboard-card">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="card-title-small m-0">
          UNIFIED INCIDENT MANAGEMENT QUEUE
        </h6>

        <button className="btn btn-sm btn-outline-light">
          Filter
        </button>
      </div>

      <div className="table-responsive">

        <table className="table table-dark align-middle custom-table">

          <thead>
            <tr>
              <th>Severity</th>
              <th>Incident & Entity Context</th>
              <th>SOAR Status / MITRE</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <span className="badge bg-danger">
                  CRITICAL
                </span>
              </td>

              <td>
                Malware Detection on SRV-01
              </td>

              <td>
                Pending Admin Approval
              </td>

              <td>
                <button className="btn btn-primary btn-sm">
                  Investigate
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <span className="badge bg-warning text-dark">
                  HIGH
                </span>
              </td>

              <td>
                SSH Brute Force Attack
              </td>

              <td>
                Auto-blocked
              </td>

              <td>
                <button className="btn btn-secondary btn-sm">
                  Review
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <span className="badge bg-danger">
                  CRITICAL
                </span>
              </td>

              <td>
                Anomalous Mass Data Exfiltration
              </td>

              <td>
                Activity Anomalies
              </td>

              <td>
                <button className="btn btn-primary btn-sm">
                  Investigate
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}