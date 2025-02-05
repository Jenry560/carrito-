import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";

export const ProductoItem = ({ title, image, category, price, id }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Hace el desplazamiento de manera suave
    });
  }

  return (
    <div key={id} className="producto">
      <Link to={`/producto/${id}`} onClick={scrollToTop}>
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">
          Añadir al carrito
        </button>

        <Link to={`/producto/${id}`} onClick={scrollToTop}>
          Vista
        </Link>
      </div>
    </div>
  );
};
