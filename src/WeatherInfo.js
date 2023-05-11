import React from "react";
import FormatDate from "./FormatDate";
import Icon from "./Icon";

export default function WeatherInfo(props){

    return(
        <div className="WeatherInfo">
<h1>{props.data.city}</h1>
        <ul>
         <li><FormatDate data={props.data.date} /> </li>
           
            <li className="text-capitalize">{props.data.description} </li>
        </ul>
        <div className="row mt-3">
            <div className="col-7">

<Icon code={props.data.icon} size={69} />
           
              <span className="temp">{Math.round(props.data.temperature)} </span> <span className="unit">° C</span>
            
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