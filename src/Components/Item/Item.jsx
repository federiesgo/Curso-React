import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "../Card/Carta.scss"

const Item = ({ product }) => {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 py-5'>
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
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="textoCentrado">
          <div className="textoCentrado">           
            <Link to={`/detail/${product.id}`}> Ver detalle </Link>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}
export default Item;