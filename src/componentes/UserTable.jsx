import React from 'react'



//rafce
const UserTable = (props) => {
    return (
    <div>
                <table>
        <thead>
        <tr>
            <th>Id venta</th>
            <th>Valor total</th>
            <th>idCantidaPrecio</th>
            <th>Fecha </th>
            <th>Doc id</th>
            <th>Cliente</th>
            <th>Vendedor</th>
            <th>Accion</th>
        </tr>
        </thead>
        <tbody>
            {
                props.sales.length > 0 ? (
                    props.sales.map((sale) => (
                      <tr key={sale.id}>
                        <td>{sale.id}</td>
                        <td>{sale.valorTotal}</td>
                        <td>{sale.idCantidaPrecio}</td>
                        <td>{sale.fechaVenta}</td>
                        <td>{sale.documentoIdentificacion}</td>
                        <td>{sale.NombreCliente}</td>
                        <td>{sale.vendedor}</td>
                        <td>
                          <button className="button muted-button">Edit</button>
                          <button className="button muted-button">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8}>No users</td>
                    </tr>
                  )
            }

        </tbody>
    </table>
    </div>
    )
}

export default UserTable
