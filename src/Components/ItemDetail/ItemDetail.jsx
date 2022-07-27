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
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemContext } from '../../CartContext/CartContext'


const ItemDetail = ({ product }) => {


    const { addItem } = useContext(ItemContext);
    const [buyFinished, setBuyFinished] = useState(false);


    const onAdd = (amount) => {
        addItem({ ...product, quantity: amount })
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
                            <CardActions className='centrado-cartas'>
                                <ItemCount stock={product.stock} onAdd={onAdd}/>
                            </CardActions>
                        </Card>
                    </div>}
        </>
    )
}

export default ItemDetail;