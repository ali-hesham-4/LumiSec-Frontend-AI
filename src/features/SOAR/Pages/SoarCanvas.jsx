// PlaybookBuilder.jsx
import logo from "../../../assets/LumiSecLogoB 1@3x.png";
import profile from "../../../assets/prrofile.png";
import virusLookupIcon from "../../../assets/soarIcon(1).png"
import FortiGateIcon from "../../../assets/soarIcon(2).png"
import SplunkQueryIcon from "../../../assets/soarIcon(4).png"
import IFConditionIcon from "../../../assets/soarIcon(3).png"
import telegramIcon from "../../../assets/Symbol.png"
import backgroundImg from "../../../assets/backgroundImage2.png";

import React, { useCallback, useState } from "react";
import "./soarConvas.css"
import { Link } from "react-router-dom";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  Handle,
  Position,
} from "reactflow";

import "reactflow/dist/style.css";

function CustomNode({ data }) {
  return (
    <div
      style={{
        minWidth: 220,
        background: "#1f2937",
        border: `2px solid ${data.color}`,
        borderRadius: 10,
        color: "#fff",
        padding: 12,
      }}
    >
      <Handle type="target" position={Position.Top} />

      <div
        style={{
          fontWeight: "bold",
          marginBottom: 6,
          color: data.color,
        }}
      >
        {data.title}
      </div>

      <div style={{ fontSize: 13 }}>{data.description}</div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 350, y: 80 },
    data: {
      title: "IF: Malicious",
      description: "Check threat score > 5",
      color: "#f59e0b",
    },
  },

  {
    id: "2",
    type: "custom",
    position: { x: 350, y: 200 },
    data: {
      title: "VirusTotal Lookup",
      description: "Check IP reputation",
      color: "#3b82f6",
    },
  },

  {
    id: "3",
    type: "custom",
    position: { x: 100, y: 350 },
    data: {
      title: "FortiGate Block",
      description: "Action: Block IP",
      color: "#ef4444",
    },
  },

  {
    id: "4",
    type: "custom",
    position: { x: 550, y: 350 },
    data: {
      title: "Log Event",
      description: "Record benign IP",
      color: "#22c55e",
    },
  },

  {
    id: "5",
    type: "custom",
    position: { x: 100, y: 500 },
    data: {
      title: "Slack Alert",
      description: "Notify security team",
      color: "#22c55e",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
  },

  {
    id: "e2-4",
    source: "2",
    target: "4",
  },

  {
    id: "e3-5",
    source: "3",
    target: "5",
  },
];

export default function PlaybookBuilder() {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes);

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges);

  const [selectedNode, setSelectedNode] =
    useState(initialNodes[1]);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            animated: true,
          },
          eds
        )
      ),
    [setEdges]
  );

  const addNode = (title) => {
    const id = Date.now().toString();

    const nodeColors = {
      Dashboard: "#8b5cf6",
      "Webhook Trigger": "#6366f1",
      "Email Alert": "#8b5cf6",
    
      "VirusTotal Lookup": "#3b82f6",
      "FortiGate Block": "#ef4444",
      "Splunk Query": "#f97316",
    
      "IF Condition": "#f59e0b",
      Delay: "#64748b",
    
      "Slack Alert": "#ec4899",
      "Send Email": "#06b6d4",
    };
  
    const newNode = {
      id,
      type: "custom",
      position: {
        x: 250 + Math.random() * 300,
        y: 200 + Math.random() * 300,
      },
      data: {
        title,
        description: "New Node",
        color: nodeColors[title] || "#22c55e",
      },
    };
  
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#111827",
      }}
    >
      {/* TOP BAR */}

      <div
      className="row py-1"
        style={{
          height: 80,
          background: "#252526",
          borderBottom: "1px solid #374151",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          color: "#fff",
        }}
      >
        <div className="col-4 d-flex align-items-center gap-3">
          <Link to="/Phishing" className="text-decoration-none d-flex align-items-center">
            <img src={logo} alt="logo" style={{ width: '40px', height: 'auto' }} />
          </Link>
          
          <span className="desc-header mt-1" style={{ whiteSpace: 'nowrap' }}>
            Incident Response Playbook
          </span>
</div>
          
<div className="col-5">
  <div className="d-flex justify-content-between align-items-center gap-2">
    
      <div className="d-flex justify-content-between align-items-center">
      <button className="btn save-soar-btn btn-dark p-3 mx-2 py-2 rounded-3">
        <i className="fa-solid fa-floppy-disk me-2"></i>
        Save
      </button>
      
      <button className="btn run-soar-btn p-3 py-2 mx-2 rounded-3">
        <i className="fa-solid fa-play me-2"></i>
        Run Test
      </button>
      
      <button className="btn activate-soar-btn p-3 py-2 mx-2 rounded-3">
        <i className="fa-solid fa-bolt-lightning me-2"></i>
        Activate
      </button>
    </div>

    <div className="d-flex justify-content-between align-items-center">
      <Link to={""} className="btn p-3 py-2 rounded-3 d-flex align-items-center">
        <i className="fa-solid text-secondary mb-1 fa-gear fs-5"></i>
      </Link>

      <figure className="profile-figure mb-0 ms-2">
        <img src={profile} alt="profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      </figure>
    </div>
    
  </div>
</div>
        </div>

      {/* BODY */}

      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        {/* LEFT SIDEBAR */}

        <div className="actions-sidebar">

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Dashboard")
            }
          >
            <div className="mx-2 soar-btns-icon rounded-3">
              <i class="fa-solid fa-chart-line text-white mx-2"></i>
            </div>
            Dashboard
          </button>
          
          <h6 className="soar-headers" style={{ color: "#fff" }}>
            TRIGGERS
          </h6>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Webhook Trigger")
            }
          >
          <div className="mx-2 soar-btns-icon rounded-3">
            <i class="fa-solid fa-link text-white mx-2"></i>
          </div>
            Webhook Trigger
          </button>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Email Alert")
            }
          >
          <div className="mx-2 soar-btns-icon rounded-3">
              <i class="fa-solid fa-envelope text-white mx-2"></i>
          </div>
          Email Alert
          </button>

          <h6 className="soar-headers" style={{ color: "#fff" }}>
            SECURITY TOOLS
          </h6>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("VirusTotal Lookup")
            }
          >
          <div className="mx-2 rounded-3">
            <img src={virusLookupIcon} className="w-75" alt="virusLookupIcon" />
          </div>
            VirusTotal Lookup
          </button>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("FortiGate Block")
            }
          >
          <div className="mx-2 rounded-3">
          <img src={FortiGateIcon} className="w-100" alt="FortiGateIcon" />
          </div>
            FortiGate Block
          </button>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Splunk Query")
            }
          >
          <div className="mx-2 rounded-3">
          <img src={SplunkQueryIcon} className="w-100" alt="SplunkQueryIcon" />
          </div>
            Splunk Query
          </button>

          <h6 className="soar-headers" style={{ color: "#fff" }}>
            Logic
          </h6>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("IF Condition")
            }
          >
          <div className="mx-2 soar-btns-icon-orange rounded-3">
          <img src={IFConditionIcon} className="w-100" alt="IFCondition" />
          </div>
            IF Condition
          </button>


          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Delay")
            }
          >
          <div className="mx-2 soar-btns-icon rounded-3">
          <i class="fa-solid fa-clock text-white mx-2"></i>
          </div>
            Delay
          </button>

          <h6 className="soar-headers" style={{ color: "#fff" }}>
            COMMUNICATION
          </h6>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Slack Alert")
            }
          >

          <div className="mx-2 soar-btns-icon-red rounded-3">
            <i class="fa-solid fa-brands fa-slack text-white mx-2"></i>
          </div>
            Slack Alert
          </button>

          <button
            className="btn soar-btns w-100 mb-2 d-flex align-items-center rounded-3"
            onClick={() =>
              addNode("Send Email")
            }
          >
        <div className="mx-2 soar-btns-icon-blue rounded-3">
        <img src={telegramIcon} className="w-100" alt="telegramIcon" />
        </div>
            Send Email
          </button>
        </div>

        {/* CANVAS */}

        <div
          style={{
            backgroundImage: `url(${backgroundImg})`,
            flex: 1
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={(e, node) =>
              setSelectedNode(node)
            }
            fitView
          >
            <MiniMap
              pannable
              zoomable
              maskColor="rgba(0,0,0,.5)"
              nodeStrokeColor={(node) => node.data.color}
              nodeColor={(node) => node.data.color}
              nodeBorderRadius={4}
              style={{
                background: "#111827",
                border: "1px solid #374151",
                borderRadius: "12px",
                width: 200,
                height: 120,
              }}
            />         
          <Controls
            style={{
              background: "#111827",
              border: "1px solid #374151",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 15px rgba(0,0,0,.3)"
            }}/> 
            
            <Background
              gap={32}
              size={1}
              color="#334155"
/>          </ReactFlow>
        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            width: 320,
            background: "#0f172a",
            borderLeft: "1px solid #374151",
            padding: 20,
            color: "#fff",
          }}
        >
          <h5 className="mb-0">Node Configuration</h5>
          <p className="text-gray NodeConfiguration mb-4">VirusTotal Lookup</p>

          {selectedNode && (
            <>

              <div className="mb-3">
                <label htmlFor="apiKey" className="mb-2">API Key</label>

                <input
                  id="apiKey"
                  className="form-control"
                  type="password"
                  value="sasacsasads"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="ipAddress" className="mb-2">IP Address</label>

                <input
                id="ipAddress"
                  className="form-control"
                  placeholder="trigger.ip"
                />
              </div>

              <hr className="horizontalLine" />

              <div className="mb-4">
                <label>
                  Output Fields
                </label>

                <div>
                  <input
                    type="checkbox"
                  />
                  Reputation Score
                </div>

                <div>
                  <input
                    type="checkbox"
                  />
                  Threat Categories
                </div>

                <div>
                  <input
                    type="checkbox"
                  />
                  Last Analysis Date
                </div>
              </div>


              <hr className="horizontalLine" />


              <div className="mb-4">
                <label htmlFor="ErrorHandling" className="mb-2">Error Handling</label>

                <input
                  id="ErrorHandling"
                  className="form-control"
                  type="text"
                  value={"Continue on Error"}
                />
              </div>

              <button className="btn add-btn border-0 text-center text-white w-100">
                <i class="fa-solid fa-play mx-2"></i>
                Test Node
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}