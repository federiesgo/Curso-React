import * as React from 'react';
import { useState, useContext } from 'react';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./ItemCount.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const ItemCount = ({ stock, onAdd }) => {
  const [amount, setAmount] = useState(1);

  const addAndRemove = (value) => {
    const result = amount + value;
    if (stock > 0) {
      if (result <= stock && result >= 0) {
        setAmount(amount + value)
      }
    }
  }




  return (
    <>
      <div className='componente'>
        <div className='centrado'>
          <Button variant="outlined" onClick={() => addAndRemove(-1)} startIcon={<RemoveIcon />}>
            Quitar
          </Button>
          <span className='ml-1'>{amount}</span>
          <Button variant="contained" onClick={() => addAndRemove(+1)} endIcon={<AddIcon />}>
            Agregar
          </Button>
          <Button disabled={amount === 0 ? true : false} variant="contained" onClick={() => onAdd(amount)} endIcon={<AddShoppingCartIcon />}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  )
}