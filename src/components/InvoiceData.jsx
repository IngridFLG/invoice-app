
export const InvoiceData = ({id, name}) => {

    return (
        <>
             <ul className="list-group">
              <li className="list-group-item">id: {id}</li>
              <li className="list-group-item">name: {name}</li>
            </ul>
        </>
    )
}