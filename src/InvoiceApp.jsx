import { useState } from "react";
import { invoiceService, calculateTotal } from "./services/invoiceService";
import { InvoiceClient } from "./components/InvoiceClient";
import { InvoiceCompany } from "./components/InvoiceCompany";
import { InvoiceListView } from "./components/InvoiceListView";
import { InvoiceData } from "./components/invoiceData";
import { TotalView } from "./components/TotalView";
import { InvoiceForm } from "./components/InvoiceForm";
import { useEffect } from "react";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: []
};

export const InvoiceApp = () => {

const [counter, setCounter] = useState(4);

const [invoice, setInvoice] = useState(invoiceInitial);

const [items, setItems] = useState([]);

const [total, setTotal] = useState(0);

const [formItemsState, setFormItemsState] = useState({
  product: "",
  price: "",
  quantity: "",
});

const {
  id,
  name,
  client,
  company
} = invoice;

const { product, price, quantity } = formItemsState;

  useEffect( () => {
    const data = invoiceService();
    setInvoice(data);
    setItems(data.items);
  }, [] );

  useEffect( () => {
    setTotal(calculateTotal(items))
  }, [items])

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
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setFormItemsState({
      product: "",
      price: "",
      quantity: "",
    });
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo factura</div>
          <div className="card-body">
            <InvoiceData id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <InvoiceClient title="Datos del cliente" client={client} />
              </div>

              <div className="col">
                <InvoiceCompany title="Datos de la empresa" company={company} />
              </div>
            </div>
            <div className="my-4">
              <InvoiceListView title="Productos de la factura" items={items} />
              <div className="mb-3">
                <TotalView total={total} />
              </div>

              {/* <InvoiceForm items={items}/> */}

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
