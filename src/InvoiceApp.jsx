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

const [activeForm, setActiveForm] = useState(false);

const [counter, setCounter] = useState(4);

const [invoice, setInvoice] = useState(invoiceInitial);

const [items, setItems] = useState([]);

const [total, setTotal] = useState(0);

const {
  id,
  name,
  client,
  company
} = invoice;

  useEffect( () => {
    const data = invoiceService();
    setInvoice(data);
    setItems(data.items);
  }, [] );

  useEffect( () => {
    setTotal(calculateTotal(items))
  }, [items])

  const handleraddItems = ({product, price, quantity}) => {
    
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setCounter(counter + 1);
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm)
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
              <div>
              <button className="btn btn-primary mb-3" onClick={onActiveForm}>{!activeForm ? 'Agregar item' : 'Ocultar formulario'}</button>
              </div>
              
              {!activeForm ? '' : <InvoiceForm handler={ (newItem) => handleraddItems(newItem) }/>}

              {/* <InvoiceForm handler={ handleraddItems }/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
