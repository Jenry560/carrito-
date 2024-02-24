import React from "react";
import { Link } from "react-router-dom";
import cellPhone from "images/smartPortada.png";
import wave1 from "images/wave.svg";
import wave2 from "images/wave2.svg";

export default function Inicio() {
  return (
    <div className="inicio">
      <img src={wave2} alt="wave_2" className="wave2" />
      <div className="sec_inicio">
        <div className="sec_portada_1">
          <h1 className="title_portada">
            Welcome <br /> to smartphone shop
          </h1>
          <p className="text_portada">
            Explora nuestro smartphone de última generación diseñado para
            mantenerte conectado, productivo y entretenido en cualquier lugar.
            Experimenta la potencia y la comodidad en la palma de tu mano.
            ¡Bienvenido al futuro de la tecnología móvil!
          </p>
          <Link to="/productos">
            <p className="title_text">Shop now&nbsp; &rarr;</p>
            <div className="sombra"></div>
          </Link>
        </div>
        <div className="sec_portada_2">
          <img src={cellPhone} alt="img_phone" />
        </div>
      </div>
      <img src={wave1} alt="wave_1" className="wave1" />
    </div>
  );
}
