import * as React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import "./ItemCount.scss"


export const ItemCount = ({ stock }) => {
  const [amount, setAmount] = useState(1);

  const onAdd = (value) => {
    const result = amount + value;
    if (stock > 0) {
      if (result <= stock && result >= 0) {
        setAmount(amount + value)
      }
    }
  }

  return (
    <div className='componente'>
      <div className='centrado'>
        <Button variant="outlined" onClick={() => onAdd(-1)} startIcon={<RemoveIcon />}>
          Quitar
        </Button>
        <span>{amount}</span>
        <Button variant="contained" onClick={() => onAdd(+1)} endIcon={<AddIcon />}>
          Agregar
        </Button>
      </div>
      <div>
        <Typography py={5} className='textoCentrado' gutterBottom variant="h5" component="div">
          Stock: {stock}
        </Typography>
      </div>
    </div>
  )
}