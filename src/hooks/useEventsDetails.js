import { useEffect, useState } from "react";
import eventsDB from "../api/eventsDB";

export const useEventsDetails = ( idEvent ) => {
    const [state, setState] = useState();

    const getEventsDetails = async () => {
        const resp = await eventsDB.get(`/${ idEvent }`);
        console.log(resp.data.overview);
    }

    useEffect(() => {
        getEventsDetails()
    }, []);

    return {
        state
    }
}