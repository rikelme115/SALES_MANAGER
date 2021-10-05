
import React,{useState} from 'react';
import ProductsTable from './ProductsTable';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
const ProductsForm = (props) => {
    //identificador,cantidad y precio unitario de cada producto(varios)
    const [editing,setEditing]=useState(false);

    const [currentProduct,setCurrentProduct]=useState({
        id:'', amount:'',priceUnit:''
    })

    const editProduct=(product)=>{
        setEditing(true);
        setCurrentProduct({
            id:product.id, amount:product.amount,priceUnit: product.priceUnit
        })
    }

    const updateProducts=(id,updateProduct)=>{
        setEditing(false);
        props.setProducts(props.products.map(product => product.id ===id ? updateProduct : product ));
    }


    return (
        <div>
            <h5>añadir productos</h5>
            {
                editing ?(
                    <div>
                        <EditProductForm currentProduct={currentProduct} updateProducts={updateProducts} />
                    </div>
                ):(
                <div>
                    <AddProductForm addProduct={props.addProduct} />
                </div>
                )    
            }
            
            <h2 >Tabla de productos</h2>
            <ProductsTable editProduct={editProduct} products={props.products} deleteProduct={props.deleteProduct} />

        </div>
    )
}

export default ProductsForm
