
import React from 'react'
import { useForm } from 'react-hook-form';
import './styles/AddProductForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlus} from '@fortawesome/free-solid-svg-icons';

const AddProductForm = (props) => {
    const {register,errors,handleSubmit}=useForm();

    const onSubmit=(data,e) =>{
        
        console.log(data);
        props.addProduct(data);
        e.preventDefault();
        //e.target.reset();
    }
    return (
        <form  onSubmit={handleSubmit(onSubmit)} >
            <div className="row">
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
                <button className="col-auto btn btn-success "><FontAwesomeIcon icon={faPlus} /></button>
            </div>

            

            
        </form>
    )
}

export default AddProductForm
