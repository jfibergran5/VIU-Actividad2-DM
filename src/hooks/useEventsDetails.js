import { useEffect, useState } from "react";
import eventsDB from "../api/eventsDB";

export const useEventsDetails = ( idEvent ) => {
    const [state, setState] = useState({
        isLoading: true,
        eventFull: undefined,
        cast: []
    });
    
    const getEventsDetails = async () => {
        const eventDetailsPromise = await eventsDB.get(`/${ idEvent }`);
        const eventCastPromise = await eventsDB.get(`/${ idEvent }/credits`);
        
        const [ detailsPromiseResponse, castPromiseResponse ] = await Promise.all([ eventDetailsPromise,eventCastPromise ])
        //console.log(eventDetailsPromise.data.overview);

        setState({
            isLoading: false,
            eventFull: detailsPromiseResponse.data,
            cast: castPromiseResponse.data.cast
        })
    }

    useEffect(() => {
        getEventsDetails()
    }, []);

    return {
        state
    }
}