import { useCallback, useEffect, useState } from "react";
import { fetchForecast } from "./api";
import CurrentWeather from "./page/CurrentWeather";
import ForecastCard from "./page/ForecastCard";
import "./App.css";
import CitySearch from "./page/CitySearch";
import ReactPullToRefresh from "react-pull-to-refresh";

function App() {
  const [city, setCity] = useState("new delhi"); 
  const [data, setData] = useState({}); 
  const [isToggled, setIsToggled] = useState(false); 
  const [loading, setLoading] = useState(false); 
  
  useEffect(() => {
    async function apiCall(){
      const res = await fetchForecast(city);
      return res;
    }
    apiCall()
    .then((res) => {setData(res?.data)})
    .catch((error)=>{alert(error);})
  },[])

  useEffect(() => {
    async function apiCall(){
      const res = await fetchForecast(city);
      return res;
    }
    apiCall()
    .then((res) => {
      if(res?.data.length === 0 && city.length > 3 ){
        alert("city not found")
      }
      setData(res?.data)})
    .catch((error)=>{alert(error);})
  },[city])

  const celsiusToFarenheit = (celsius) => {
    return (celsius * 9/5) + 32;  
  }

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  const handleUpdateCity = useCallback((searchedValue) => {
    setCity(searchedValue)
  },[city])

  const handleRefresh = async () => {
    try{
      setLoading(true);
      const res = await fetchForecast(localStorage.getItem('searchedCty'));
      setTimeout(setData(res?.data),2000)
      }catch(error){
      alert("api faled")
    }finally{
      setLoading(false);
    }
  }

  return (
      <ReactPullToRefresh onRefresh={handleRefresh}>
        <h2 style={{textAlign:'center'}}>{loading&& 'Loading...'}</h2>
        <div className="App">
            <CitySearch handleUpdateCity={handleUpdateCity}/>
            <button
            onClick={handleChange}
            className={`toggle-button ${isToggled ? 'on' : 'off'}`}
            >
              {isToggled ? 'Celsius' : 'Farenheit'}
            </button>
            <CurrentWeather city={data?.location?.name} temp={data?.current} toggle={isToggled} tempConvert={celsiusToFarenheit}/>
            <ForecastCard forecast={data?.forecast?.forecastday} toggle={isToggled} tempConvert={celsiusToFarenheit}/>
        </div>
      </ReactPullToRefresh>
  );
}

export default App;
