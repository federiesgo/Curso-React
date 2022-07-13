import React from "react";
import '../../Styles/style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

    const [buyFinished, setBuyFinished] = useState(false);

    const onAdd = () => {
        setBuyFinished(true);
    }

    return (
        <>
            {
                buyFinished
                    ?
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
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography className='mt-5' variant="body2" color="text.primary">
                                        Precio:{product.price}
                                    </Typography>
                                    <Typography className='mb-5' variant="body2" color="text.primary">
                                        Stock: {product.stock}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className='centrado-cartas'>
                                <Link to="/Cart">
                                    <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                                        Finalizar compra
                                    </Button>
                                </Link >
                            </CardActions>
                        </Card>
                    </div>


                    : <div className='centrado-cartas'>
                        <Card sx={{ maxWidth: 900 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="900"
                                    image={product.img}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography className='mt-5' variant="body2" color="text.primary">
                                        Precio:{product.price}
                                    </Typography>
                                    <Typography className='mb-5' variant="body2" color="text.primary">
                                        Stock: {product.stock}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <ItemCount stock={product.stock} />
                            <CardActions className='centrado-cartas'>
                                <Button variant="contained" onClick={() => onAdd()} endIcon={<AddShoppingCartIcon />}>
                                    Agregar al carrito
                                </Button>
                            </CardActions>
                        </Card>
                    </div>}
        </>
    )
}

export default ItemDetail;