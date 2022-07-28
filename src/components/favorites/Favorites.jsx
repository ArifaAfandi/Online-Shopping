import React from 'react';
import { useSelector } from "react-redux";
import FavoriteItem from './FavoriteItem';
import styles from './Favorites.module.scss';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearFavs } from '../../store/slices/CardSlice';
import Footer from '../Footer';

const Favorites = () => {
    const favorites = useSelector((state) => state.favoriteItems)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function clearFavItems() {
        dispatch(clearFavs())
    }

    return (
        <div className={styles.favMain}>
            <div className={styles.header}>
                <div className={styles.backIcon} onClick={() => { navigate(-1) }}><KeyboardReturnIcon sx={{ fontSize: 40 }} /></div>
                <h1>Ən bəyəndiklərim</h1>
                <Button onClick={clearFavItems} variant='contained' disabled={favorites.length === 0}>HAMISINI SİL</Button>
            </div>
            <div className={styles.favItems}>
                {favorites.length >= 1 ? favorites.map((product) => <FavoriteItem key={product.id} {...product} />) : <div className={styles.empty}>(Səbət boşdur)</div>}
            </div>
            <div style={{ marginTop: "200px" }}>
                <Footer />
            </div>
        </div>
    )
}

export default Favorites