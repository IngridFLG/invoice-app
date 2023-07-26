import { useState } from "react";

export const InvoiceForm = ({itemsInitial}) => {
  const [productValue, setProducValue] = useState('');
  const [priceValue, setPriceValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);

  const [items, setItems] = useState(itemsInitial);

  return (
    <>
      <form onSubmit={ event => {event.preventDefault(); 
        setItems([...items, {id: 4, product: productValue, price: priceValue, quantity: quantityValue}])
    }}>
        <div className="mb-3">
          <input
            type="text"
            name="product"
            className="form-control"
            placeholder="producto"
            onChange={(event) => {
              console.log(event.target.value);
              setProducValue(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="precio"
            onChange={(event) => {
              console.log(event.target.value);
              setPriceValue(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="quantity"
            className="form-control"
            placeholder="cantidad"
            onChange={(event) => {
              console.log(event.target.value);
              setQuantityValue(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Crear formulario</button>
        </div>
      </form>
    </>
  );
};
