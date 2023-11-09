import { useEffect, useState } from 'react';
import eventsDB from '../api/eventsDB';

export const useEvents = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [actualEvents, setActualEvents] = useState([]);    

    const getEvents = async() => {
        const resp = await eventsDB.get('/now_playing');
        const eventos = resp.data.results
        setActualEvents(eventos);
        setIsLoading(false)
    }

    useEffect(() => {
        getEvents()
    }, [])

    return {
        actualEvents,
        isLoading
    }
}