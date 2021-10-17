

import React,{useState} from 'react';
import UserTable  from './UserTable';
import AddForm from './AddForm';



const Form = () => {
    const salesData = [
        { id: 1, valorTotal: '20.000', idCantidaPrecio: '3431',fechaVenta:'20/12/2021',documentoIdentificacion:'4341'
      ,NombreCliente:'Juan Pablo', vendedor:'Pedro Castro'
      },
      { id: 2, valorTotal: '20.000', idCantidaPrecio: '3431',fechaVenta:'20/12/2021',documentoIdentificacion:'4341'
      ,NombreCliente:'Juan Pablo', vendedor:'Pedro Castro'
      },
      { id: 3, valorTotal: '20.000', idCantidaPrecio: '3431',fechaVenta:'20/12/2021',documentoIdentificacion:'4341'
      ,NombreCliente:'Juan Pablo', vendedor:'Pedro Castro'
      },
    ]
        

    
    const [sales, setSales] = useState(salesData);

    const addSale=(sale)=>{

        setSales([...sales,sale]);
    }
    return (
    <div className="container">
      <div >
        <div className="flex-large">
          <h2>Registro de las ventas</h2>
          <hr />
          <AddForm addSale={addSale} />
        </div>
        
      </div>
    </div>
    )
}

export default Form
