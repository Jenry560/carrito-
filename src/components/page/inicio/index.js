import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/mejores-celulares-2018.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h1 className='title_text'>home</h1>
            </Link>
            <Link to="/productos">
            <h1 className='title_text'>Products</h1>
            </Link>
            <img src={Portada} alt="" style={{height: '350px', objectFit: "cover"}}/>
        </div>
    )
}
