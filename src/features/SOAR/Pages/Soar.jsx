import React, { useState } from 'react'
import { NavLink, Outlet , Link } from 'react-router-dom'
import logo from "../../../assets/LumiSecLogoB 1@3x.png"



import "./Soar.css"
import {
    CircleCheck,
    ClipboardCheck,
    FileChartColumnIncreasing,
    Settings,
    Menu,
    TriangleAlert,
    SettingsIcon,
} from 'lucide-react'

export default function Soar() {


    const [collapsed, setCollapsed] = useState(false)



    return (
        <>



            <div className='main-layout'>
                
                <aside className='d-none d-lg-block'>
                
                            <div className={collapsed ? "sidebar soar collapsed" : "sidebar soar"}>
                
                                <SidebarLinks collapsed={collapsed} />
                
                            </div>
                
                </aside>

                {/* CONTENT */}
                <main className='content p-0'>
                    <Outlet context={{ collapsed, setCollapsed }} />
                </main>

            </div>

            {/* ================= MOBILE SIDEBAR (OFFCANVAS) ================= */}
            <div
                className="offcanvas offcanvas-start sidebar-offcanvas d-lg-none"
                tabIndex="-1"
                id="mobileSidebar"
            >

                <div className="offcanvas-body">

                    <SidebarLinks collapsed={false} />

                </div>

            </div>

        </>
    )
}

/* ================= SIDEBAR LINKS ================= */

export function SidebarLinks({ collapsed }) {

    return (
        <nav className='d-flex flex-column gap-2'>

            <NavItem to="/SoarDashboard" icon={<i class="fa-solid fa-chart-pie"></i>} text="Analytics & Reports" collapsed={collapsed} />
            <NavItem to="/SoarDashboard/IncidentsQueue" icon={<i class="fa-solid fa-screwdriver-wrench"></i>} text="Incidents Queue" collapsed={collapsed} />
            <NavItem to="/SoarDashboard/IncidentManagement" icon={<TriangleAlert size={22} />} text="Incident Management" collapsed={collapsed} />
            <NavItem to="/SoarDashboard/settings" icon={<SettingsIcon size={22} />} text="Settings" collapsed={collapsed} />


        </nav>
    )
}

function NavItem({ to, icon, text, collapsed }) {

    return (
        <NavLink
            to={to}
            end={to === "/SoarDashboard"}
            className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
            }
        >

            <span className='icon'>
                {icon}
            </span>

            {!collapsed && (
                <span className='text'>
                    {text}
                </span>
            )}

        </NavLink>
    )
}