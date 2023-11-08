import axios from "axios";

const eventsDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzgxMzlmM2FhOTcxODFkZTQ5MzA4ZGMxYTcyNjA1NyIsInN1YiI6IjVmMTRjMjljMWQ3OGYyMDAzMzI1YTA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.thN7k5GOjNZd_5JMbv776RpbzWrZmL7M4snbuB8NRwo',
        accept: 'application/json'
    },
    params: {
        language: 'es-ES'
    }
});

export default eventsDB;