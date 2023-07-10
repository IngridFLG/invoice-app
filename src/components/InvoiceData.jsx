import PropTypes from "prop-types";

export const InvoiceData = ({ id, name }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">id: {id}</li>
        <li className="list-group-item">name: {name}</li>
      </ul>
    </>
  );
};

InvoiceData.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
