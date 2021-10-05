
import React from 'react'
import { useForm } from 'react-hook-form';
import './styles/AddProductForm.css';

const AddProductForm = (props) => {
    const {register,errors,handleSubmit}=useForm();

    const onSubmit=(data,e) =>{
        
        console.log(data);
        props.addProduct(data);
        e.preventDefault();
        //e.target.reset();
    }
    return (
        <form className="form-content" onSubmit={handleSubmit(onSubmit)} >
            <div className="div-content">
                <div>
                    <label >Id producto</label>
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

                <div>
                
                    <label >cantidad</label>
                    <input type="text" name="amount"  
                        {
                            ...register('amount',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.amount?.message}
                    </div>

                </div>          

            
                <div>

                    <label>Precion unitario</label>
                    <input type="text" name="priceUnit"  
                        {
                            ...register('priceUnit',{
                                required: {value : true, message :'campo requerido'}
                            })
                        }
                    />
                    <div>
                        {errors?.priceUnit?.message}
                    </div>
                </div>
            </div>

            

            <button>Añadir Producto</button>
        </form>
    )
}

export default AddProductForm
