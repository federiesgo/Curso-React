import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { ItemCount } from '../ItemCount/ItemCount';
import "../Card/Carta.scss"

const Item = ({ product }) => {
    return (        
        <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 py-5'>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="450"
              image={product.img}
              alt={product.name}
            />
            <CardContent>
              <Typography className='textoCentrado' gutterBottom variant="h5" component="div">
              {product.name}
              </Typography>
              <Typography className='textoCentrado' variant="body2" color="text.secondary">
              {product.desciption} 
              </Typography>              
            </CardContent>
            </CardActionArea>           
            <CardActions>
                <ItemCount stock={product.stock} />
            </CardActions>          
        </Card>
    </div>
    )
}
export default Item;