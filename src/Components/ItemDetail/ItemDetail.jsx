import React from "react";
import '../../Styles/style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemDetail = ({ product }) => {
    return (
        <div className='centrado-cartas'>
            <Card sx={{ maxWidth: 900 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="900"
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
                        <Typography className='textoCentrado mt-5' variant="body2" color="text.primary">
                            Precio:{product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='centrado-cartas'>
                    <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                        Agregar al carrito
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ItemDetail;