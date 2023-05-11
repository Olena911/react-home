import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
const [city,setCity]=useState(props.defaultCity);
function handleResponse(response){
    setWeatherData({
        ready:true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt*1000),
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        city: response.data.name,
      });
      
    }
function search(){
    const apiKey="4a7c01390293f156a41b247c2f0f0679";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event){
        event.preventDefault();
        search();

    }
    function changeCity(event){
setCity(event.target.value);
    }

if(weatherData.ready){
  
    return (<div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"
            onChange={changeCity}
            />
            </div>
            <div className="col-3">
<input type="submit" value="Search" className="btn btn-primary"/>
</div>
</div>
        </form>

<WeatherInfo data={weatherData}/>

<hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
    </div> 
    );
} else{
    search();
    return "Loading..."
}}