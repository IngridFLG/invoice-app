import { invoiceService } from "./services/invoiceService";
import { InvoiceClient } from "./components/InvoiceClient";
import { InvoiceCompany } from "./components/InvoiceCompany";
import { InvoiceListView } from "./components/InvoiceListView";
import { InvoiceData } from "./components/invoiceData";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = invoiceService();

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
