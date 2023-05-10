import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});

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
    
if(weatherData.ready){
  
    return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
<input type="submit" value="Search" className="btn btn-primary"/>
</div>
</div>
        </form>

<WeatherInfo data={weatherData}/>
        
    </div> 
    );
} else{

    const apiKey="4a7c01390293f156a41b247c2f0f0679";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}}