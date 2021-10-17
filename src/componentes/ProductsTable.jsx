
import React from 'react';

const ProductsTable = (props) => {
    return (
        <div>

          <table className="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio Unitario</th>
                      <th scope="col">Op </th>
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
                                <td className='row justify-content-around align-items-center'>
                                  <button className="btn btn-primary col-sm-2 border"  onClick={() => {props.editProduct(product)} }>Edit</button>
                                  <button className="btn btn-danger col-sm-2 border " onClick={() => {props.deleteProduct(product.id)} } >Delete</button>
                                
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4}>No users</td>
                            </tr>
                          )
                    }

              </tbody>
          </table>  
                   
                 
        </div>
        )
}

export default ProductsTable
