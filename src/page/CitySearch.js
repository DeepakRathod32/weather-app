import { useEffect, useState } from "react";
import "./CitySearch.css";
import { fetchCitySearch } from "../api";

const CitySearch = (props) => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [debounceTerm, setDebounceTerm] = useState(searchTerm);
    const [searchedCity, setSearchedCity] = useState([]);  

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceTerm(searchTerm)
    },500);
    return () => {clearTimeout(handler);}
  },[searchTerm])

  useEffect(() => {
    if(debounceTerm){
        async function apiCall(){
            const res = await fetchCitySearch(searchTerm);
            if(res?.data.length === 0 &&  searchTerm.length > 3){
              alert("city not found");
            }else if(searchTerm === ""){
              alert("enter city to search");
            }
            return res;
          }
          apiCall()
          .then((res) => {setSearchedCity(res.data)})
          .catch((error)=>{alert(error);})
    }
  },[debounceTerm])
   
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchClick = (e) => {
    let newValue = e.target.value;
    props.handleUpdateCity(newValue);
    localStorage.setItem('searchedCty',newValue)
    setSearchTerm("")
  }

    return (
        <div className="searchContainer">
        <input type="text" id="search" value={searchTerm} onChange={(e) => handleSearch(e)} className="search" placeholder="search city..."/>
        <>
        {searchTerm && <select form="search"  className="Drop-down" size="5" onChange={(e) => handleSearchClick(e)}>
          {
            searchedCity.map((city,i) => {
              return <option key={i} value={city.name}>{`${city.name}, ${city.region}, ${city.country}`}</option>
            })
          }
        </select>}
        </>
        </div>
    )
}

export default CitySearch;