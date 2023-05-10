import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){

    return(
        <div className="WeatherInfo">
<h1>{props.data.city}</h1>
        <ul>
            ///
           
            <li className="text-capitalize">{props.data.description} </li>
        </ul>
        <div className="row mt-3">
            <div className="col-7">

                <img src={props.data.icon}  alt={props.data.description} className="float-left"/>
             <div className="float-letf"> 
              <span className="temp">{Math.round(props.data.temperature)}° </span> <span className="unit">C</span>
            </div>
            </div>
            <div className="col-4">
                <ul>
                    <li>Humidity: {props.data.humidity} %</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
}