import React from "react"
import Marker from "../images/map-marker-alt-solid.svg"

export default function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.item.imageUrl} />
                      
            </div>
            <div className="card-location">
                <div className="location-map">
                    <img src={Marker} className="icon"/>
                    <h2>{props.item.location}</h2>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>   
    )
}

