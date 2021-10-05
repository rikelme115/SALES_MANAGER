
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
            <label>Id producto</label>
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

            <label>cantidad</label>
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

            

            <button>Editar Producto</button>
        </form>
    )
}

export default EditProductForm
