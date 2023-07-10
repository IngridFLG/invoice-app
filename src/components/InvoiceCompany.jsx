import PropTypes from 'prop-types';

export const InvoiceCompany = ({title, company}) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">name: {company.name}</li>
        <li className="list-group-item">
          fiscal number: {company.fiscalNumber}
        </li>
      </ul>
    </>
  );
};


InvoiceCompany.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fiscalNumber: PropTypes.number.isRequired,
  }).isRequired,
};