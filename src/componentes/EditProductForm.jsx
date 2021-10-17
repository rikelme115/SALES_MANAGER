
import React from 'react'
import { useForm } from 'react-hook-form';

const EditProductForm = (props) => {
    const {register,errors,handleSubmit,setValue}=useForm({
        defaultValues:props.currentProduct
    });

    setValue('id',props.currentProduct.id);
    setValue('amount',props.currentProduct.amount);
    setValue('priceUnit',props.currentProduct.priceUnit);
    console.log(props.currentProduct);

    const onSubmit=(data,e) =>{
        console.log(data);
        e.preventDefault();
        props.updateProducts(props.currentProduct.id,data);
        //e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="row ">
                
                <div className="col-auto">
                   
                    <input type="text" name="id"  placeholder='Id producto'
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

                <div className="col-auto">
                
                   
                    <input type="text" name="amount"  placeholder="cantidad"
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

            
                <div className="col-auto">

                   
                    <input type="text" name="priceUnit" placeholder="Precio unitario" 
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
                <button className="col-auto btn btn-primary">Editar producto</button>
            </div>
        </form>
    )
}

export default EditProductForm
