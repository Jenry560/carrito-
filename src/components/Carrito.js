import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };
  const increase = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres suspender el producto?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  return (
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <box-icon name="x" />
        </div>
        <h2>Su Carrito</h2>
        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2>Carrito Vacio</h2>
          ) : (
            <>
              {carrito.map((producto) => (
                <div className="carrito__item" key={producto.id}>
                  <img src={producto.image} alt={producto.title} />
                  <div style={{ marginLeft: "9px" }}>
                    <h3> {producto.title} </h3>
                    <p className="price">${producto.price}</p>
                    <div className="ajuste">
                      <div>
                        <box-icon
                          onClick={() => increase(producto.id)}
                          name="up-arrow"
                          type="solid"
                        />
                        <p className="cantidad">{producto.cantidad}</p>
                        <box-icon
                          onClick={() => reduce(producto.id)}
                          name="down-arrow"
                          type="solid"
                        />
                      </div>
                      <div
                        onClick={() => removeProducto(producto.id)}
                        className="remove__item"
                      >
                        <box-icon name="trash" id="trash" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              ;
            </>
          )}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};
