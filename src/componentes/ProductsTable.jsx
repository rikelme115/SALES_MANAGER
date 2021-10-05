
import React from 'react';

const ProductsTable = (props) => {
    return (
        <div>
                    <table>
            <thead>
            <tr>
                <th>Id </th>
                <th>Cantidad</th>
                <th>Precio por unidad</th>
                
                <th>Accion</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.products.length > 0 ? (
                        props.products.map((product) => (
                          <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.amount}</td>
                            <td>{product.priceUnit}</td>
                            <td>
                              <button className="button muted-button"  onClick={() => {props.editProduct(product)} }>Edit</button>
                              <button className="button muted-button" onClick={() => {props.deleteProduct(product.id)} } >Delete</button>
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

export default ProductsTable
