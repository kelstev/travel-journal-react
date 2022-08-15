import React from "react"
import Globe from "../images/globe.png"

export default function Navbar(){
    return (
        <nav>
            <img className="logo" src={Globe} /> 
            <h4>my travel journal.</h4>
        </nav>    
    )
}