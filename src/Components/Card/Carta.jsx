import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import esmalte from '../../img/esmalte.png'
import { ItemCount } from '../ItemCount/ItemCount';
import "./Carta.scss"



export const Carta = ({cantidad, product}) =>{
  

  return (
    <div className='centradoCartas'>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="450"
              image={esmalte}
              alt="Esmalte"
            />
            <CardContent>
              <Typography className='textoCentrado' gutterBottom variant="h5" component="div">
                Esmalte
              </Typography>
              <Typography className='textoCentrado' variant="body2" color="text.secondary">
                El esmalte Sally Hansen se utiliza como primer paso de esmaltado dejando una separación
                 de un milímetro entre cutícula y producto sellando el borde libre. 
              </Typography>              
            </CardContent>
            </CardActionArea>           
            <CardActions>
                <ItemCount stock={cantidad} />
            </CardActions>          
        </Card>
    </div>
  )
}