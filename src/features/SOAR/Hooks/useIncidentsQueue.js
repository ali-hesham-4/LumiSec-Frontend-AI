import { useCallback, useEffect, useState } from "react";

import {
    getStats,
} from "../Services/IncidentsQueue.js";

export default function useIncidentsQueue() {

    const [stats, setStats] = useState([]);
    const [findings, setFindings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


        const loadData =  useCallback(async()=>{
            setLoading(true)
            setError(null)
            // setTimeout(async()=>{
                try {
                    const data = await getStats()
                    setStats(data)
                } catch (error) {
                    setError(error)
                }finally{
                    setLoading(false)
                }
            // } , 3000)
        } , [stats])

        console.log(stats);


    useEffect(()=>{
        loadData()
    }, [])


    return {
        stats,
        findings,
        loading,
        error,
    };
}