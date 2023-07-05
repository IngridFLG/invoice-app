import { invoiceService } from "../services/invoiceService";
import { InvoiceData } from "./invoiceData";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = invoiceService();
  const { name: nameClient, lastName, addres } = client;
  const { country, city, street, number } = addres;
  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo factura</div>
          <div className="card-body">
            <InvoiceData id={ id } name={ name } />

            <div className="row my-3">
              <div className="col">
                <h3>Datos del cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    Nombre: {nameClient} {lastName}
                  </li>
                  <li className="list-group-item">
                    addres: {country} {city}
                  </li>
                  <li className="list-group-item">
                    {street} {number}
                  </li>
                </ul>
              </div>

              <div className="col">
                <h3>Datos de la empresa</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    name: {company.name}
                  </li>
                  <li className="list-group-item">
                    fiscal number: {company.fiscalNumber}
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-4">
              <h4>Productos de la factura</h4>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(({ product, price, quantity, id }) => (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
