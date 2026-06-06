import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './features/auth/pages/Login';
import GRC from './features/GRC/pages/GRC';
import GRCDashboard from './features/GRC/pages/GRCDashboard';
import GRCAudits from './features/GRC/pages/GRCAudits';
import GRCStandards from './features/GRC/pages/GRCStandards';
import GRCRemediation from './features/GRC/pages/GRCRemediation';
import GRCSettings from './features/GRC/pages/GRCSettings';
import IncidentQueue from './features/SOAR/Pages/IncidentQueue';
import Soar from './features/SOAR/Pages/Soar';
import SoarAnalytics from './features/SOAR/Pages/SoarAnalytics';

const myRouter = createBrowserRouter([
    { path: "/", element:  <Login />},
    { path: "/GRC", element:  <GRC/>,
        children:[
            { path: "", element:  <GRCDashboard/>},
            { path: "/GRC/Audits", element:  <GRCAudits/>},
            { path: "/GRC/Standards", element:  <GRCStandards/>},
            { path: "/GRC/Remediation", element:  <GRCRemediation/>},
            { path: "/GRC/Settings", element:  <GRCSettings/>},
        ]
    },
    { path: "/SOAR", element:  <Soar/>,
        children:[
            { path: "", element:  <SoarAnalytics/>},
            { path: "/SOAR/Analytics", element:  <SoarAnalytics/>},
            { path: "/SOAR/IncidentsQueue", element:  <IncidentQueue/>},
            { path: "/SOAR/Remediation", element:  <GRCRemediation/>},
            { path: "/SOAR/Settings", element:  <GRCSettings/>},
        ]
    },

])

function App() {
return <>

    <RouterProvider router={myRouter} />


    </>
}

export default App;
