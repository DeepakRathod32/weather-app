import "./../page/CurrentWeather.css"
const CurrentWeather = (props) => {
    return (
        <div className="weatherContainer">
            <div className="tempContainer">
            <h2 className="city">{props?.city}</h2>
            <p className="temp">{props.toggle ? parseInt(props.tempConvert(props?.temp?.temp_c)) : parseInt(props?.temp?.temp_c) }</p>
            </div>
            <div className="iconContainer">
            <p className="weather">{props?.temp?.condition?.text}</p>
            <img src={props?.temp?.condition?.icon} alt="weather icon" className="icon"/>
            </div>
        </div>
    )
}

export default CurrentWeather;