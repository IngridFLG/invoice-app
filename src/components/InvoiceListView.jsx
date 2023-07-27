import { RowItemView } from "./RowItemView";
import PropTypes from "prop-types";

export const InvoiceListView = ({title, items, handlerDeleteItem}) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>product</th>
            <th>price</th>
            <th>quantity</th>
            <head>Eliminar</head>
          </tr>
        </thead>
        <tbody>
          {items.map(({ product, price, quantity, id }) => (

            <RowItemView key={id} id={id} product={product} price={price} quantity={quantity} handlerDeleteItem={id => handlerDeleteItem(id)}/>

          ))}

        </tbody>
      </table>
      
    </>
  );
};

InvoiceListView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
