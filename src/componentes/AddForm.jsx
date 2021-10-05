
import React from 'react';
import { useForm } from 'react-hook-form';
import ProductsForm from './ProductsForm';
import { useState } from 'react/cjs/react.development';
import './styles/AddForm.css';
const AddForm = (props) => {
    const productsData=[
       
      ]
  
      const [products,setProducts]=useState(productsData);
      console.log(productsData);

      const addProduct=(product)=>{
  
          setProducts([...products,product]);
          console.log(products);
      }

      const deleteProduct=(id)=>{

        setProducts(products.filter(product => product.id !== id ));

      }

    const {register,errors,handleSubmit}=useForm();
    
    const onSubmit=(data,e) =>{
        console.log(data);
        props.addSale(data);
        setProducts([]);
        //e.target.reset();
        e.preventDefault();
    }
    
    return (
        <div >
            <div className='div-content'>

                <div  >
                    <label>Id de la venta</label>
                    <input type="text" name="id"  
                            {
                                ...register('id',{
                                    required: {value : true, message :'campo requerido'}
                                })
                            }
                    />
                    <div>
                        {errors?.id?.message}
                    </div>
                </div>
                
                <div >
                    <label>Valor total venta</label>
                    <input type="text" name="valorTotal"  
                        {
                            ...register('valorTotal',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.valorTotal?.message}
                    </div>
                </div>
            </div>

            <div>
                
            <ProductsForm addProduct={addProduct} products={products} setProducts={setProducts} deleteProduct={deleteProduct}/>
                

            </div>

            

            <label>Fecha de venta</label>

            <input type="text" name="fechaVenta"  
                {
                    ...register('fechaVenta',{
                        required: {value : true, message :'campo requerido'}
                    })
                }
            />
            <div>
                {errors?.fechaVenta?.message}
            </div>

            <label>Documento de identificacion</label>

            <input type="text" name="documentoIdentificacion"  
                {
                    ...register('documentoIdentificacion',{
                        required: {value : true, message :'campo requerido'}
                    })
                }
            />
            <div>
                {errors?.documentoIdentificacion?.message}
            </div>

            <label>Nombre del cliente </label>

            <input type="text" name="NombreCliente"  
                {
                    ...register('nombreCliente',{
                        required: {value : true, message :'campo requerido'}
                    })
                }
            />
            <div>
                {errors?.DocumentoIdentificacion?.message}
            </div>

            <label>Vendedor</label>

            <input type="text" name="vendedor"  
                {
                    ...register('vendedor',{
                        required: {value : true, message :'campo requerido'}
                    })
                }
            />
            
            <div>
                {errors?.vendedor?.message}
            </div>

            <button onClick={handleSubmit(onSubmit)}>Registrar Venta</button>
        </div>
    )
}

export default AddForm
