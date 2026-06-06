import axios from "axios";

    const baseURL = "http://localhost:3001"

    export async function getStats() {
    
        const response = await axios.get(baseURL + "/stats");

        return response.data;
    }
