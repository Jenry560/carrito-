import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <>
      <div className="produ_title_container">
        <span className="linea"></span>
        <h1 className="produ">Products</h1>
        <span className="linea"></span>
      </div>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            price={producto.price}
            id={producto.id}
          />
        ))}
      </div>
    </>
  );
};
