import { useState } from "react";

export const InvoiceForm = ({handler}) => {


  const [formItemsState, setFormItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemsState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemsState({
      ...formItemsState,
      [ name ]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) {
      alert("Error el precio no es un numero");
      return;
    }
    if (isNaN(price.trim())) return;
    if (quantity.trim().length < 1) {
      alert("Error la cantidad tiene que ser mayor a 0");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("Error la cantidad tiene que ser un numero");
      return;
    }

    handler(formItemsState);
    
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form
                className="w-50"
                onSubmit={(event) => onInvoiceSubmit(event)}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="product"
                    value={product}
                    className="form-control"
                    placeholder="Producto"
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="price"
                    value={price}
                    className="form-control"
                    placeholder="Precio"
                    onChange={onInputChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    className="form-control"
                    placeholder="Cantidad"
                    onChange={(event) => onInputChange(event)}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary">
                    Crear formulario
                  </button>
                </div>
              </form>
    </>
  );
};
