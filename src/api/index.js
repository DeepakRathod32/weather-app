import { API_KEY } from "../constants"
import instance from "./axiosInstance"

export const fetchCitySearch = (city) => {
    const citySearch = instance.get(`/search.json?key=${API_KEY}&q=${city}`);  
    return citySearch;
}

export const fetchForecast = (city) => {
    const weatherForecast = instance.get(`/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`);  
    return weatherForecast;
}