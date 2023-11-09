import { useEffect, useState } from 'react';
import eventsDB from '../api/eventsDB';

export const useEvents = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [eventsState, setEventsState] = useState([]);      

    const getEvents = async() => {
       
        // Creamos un listado de promesa spara ejecutarlas todas a la vez
        const nowPlayingPromise = eventsDB.get('/now_playing');
        const popularPromise = eventsDB.get('/popular');
        const topRatedPromise = eventsDB.get('/top_rated');
        const upcomingPromise = eventsDB.get('/upcoming');

        const response = await Promise.all([nowPlayingPromise,popularPromise,topRatedPromise,upcomingPromise])

        setEventsState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        })
        
        setIsLoading(false);
    }

    useEffect(() => {
        getEvents()
    }, [])

    return {
        ...eventsState,
        isLoading
    }
}