
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductsForm from './ProductsForm';
import './styles/AddForm.css';
import axios from 'axios'
const AddForm = (props) => {
    const productsData=[]
  
      const [products,setProducts]=useState(productsData);

      const addProduct=(product)=>{
          setProducts([...products,product]);
      }

      const deleteProduct=(id)=>{

        setProducts(products.filter(product => product.id !== id ));

      }

    const {register,errors,handleSubmit}=useForm();
    
    const insert_venta = (data) => {
        axios.post("http://localhost:3001/insertar_venta", {
            id_venta:data.id_venta
            ,fecha_venta:data.fecha_venta
            ,vendedor:data.vendedor
            ,nombre_cliente:data.nombre_cliente
            ,documento_id: data.documento_id
            ,productos:data.productos,
        }).then(() => {
            alert("Datos insertados exitosamente")
            
        })
    };
    const onSubmit=(data,e) =>{
        console.log(data);
        const data_venta={
            id_venta:data.id,
            fecha_venta:data.fechaVenta,
            vendedor:data.vendedor,
            nombre_cliente:data.nombreCliente,
            documento_id: data.documentoIdentificacion,
            productos:JSON.stringify(products),
        }
        props.addSale(data);
        console.log(products);
        console.log('Productos convertidos a JSON');
        console.log(JSON.stringify(products));
        insert_venta(data_venta);
        setProducts([]);
        
        //e.target.reset();
        e.preventDefault();
    }
    
    return (
        <div  className="">
            <div className='row '>

                <div className=" mb-3 col-auto">
                    
                    <input type="text" name="id"  class="form-control" placeholder="Id venta" 
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

                <div className="mb-3 col-auto">
                    <input type="text" name="fechaVenta"  class="form-control" placeholder="Fecha de venta"
                        {
                            ...register('fechaVenta',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.fechaVenta?.message}
                    </div>
                </div>

                <div className="mb-3 col-auto">
                    <input type="text" name="vendedor"  class="form-control" placeholder="Vendedor" 
                        {
                            ...register('vendedor',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    
                    <div>
                        {errors?.vendedor?.message}
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="mb-3 col-auto">
                    <input type="text" name="NombreCliente"   class="form-control" placeholder="Nombre del Cliente"
                        {
                            ...register('nombreCliente',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.DocumentoIdentificacion?.message}
                    </div>
                </div>
                
                <div className="mb-3 col-auto">
                    <input type="text" name="documentoIdentificacion"  class="form-control" placeholder="Documento de indentificacion"
                        {
                            ...register('documentoIdentificacion',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.documentoIdentificacion?.message}
                    </div>
                </div>


            </div>

            

            <div>
                <ProductsForm addProduct={addProduct} products={products} setProducts={setProducts} deleteProduct={deleteProduct}/>
            </div>

            <button className='btn btn-primary' onClick={handleSubmit(onSubmit)}>Registrar Venta</button>
        </div>
    )
}

export default AddForm
