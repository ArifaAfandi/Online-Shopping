import React from 'react';
import './Favorites.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteFavorite, itemCount } from '../../store/slices/CardSlice';

const FavoriteItem = ({ id, img, price, name, size }) => {

    const dispatch = useDispatch()

    function deleteFav() {
        dispatch(deleteFavorite(id))
    }

    function addToBasket() {
        dispatch(itemCount({ id, img, price, name, size }))
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="product"
                    height="380"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: {price} AZN <br />
                        Size: {size}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteFav} size="small">SİL</Button>
                    <Button onClick={addToBasket} size="small">Səbətə əlavə et</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default FavoriteItem