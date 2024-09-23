import "./../page/ForecastCard.css"
const ForecastCard = (props) => {
    let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday "];

    const getWeekdayFromDate = (dateString) => {
        let date = new Date(dateString);
        return dayOfWeek[date.getDay()]
    }
    // console.log(props)
    return(
        <div className="forecastWrapper">
            <p className="title">5-day forecast</p>
            {
                props.forecast?.map((item,i) => {
                   return <div className="forecastContainer" key={i}>
                        <p className="date">{getWeekdayFromDate(item?.date)}</p>
                        <div className="tempDiv">
                        <img src={item?.day?.condition?.icon} alt="weather icon" className="icon"/>
                        <div className="temContainer">
                        <p className="lowTemp">{props.toggle ? parseInt(props.tempConvert(item?.day?.mintemp_c)) : parseInt(item?.day?.mintemp_c)}</p>
                        <p className="highTemp">/{props.toggle ? parseInt(props.tempConvert(item?.day?.maxtemp_c)) : parseInt(item?.day?.maxtemp_c)}</p>
                        </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
} 

export default ForecastCard;