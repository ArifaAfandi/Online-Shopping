import React from 'react'
import "./Shopcard.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import { itemCount, addToFavorites } from '../../store/slices/CardSlice';


const Shopcard = ({ img, index, id, price, name, size }) => {
  const [displayIndex, setDisplayIndex] = React.useState(0)

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteItems)
  function handleClick() {
    dispatch(itemCount({ id, img, price, name, size }))
  }

  function handleFavorites() {
    dispatch(addToFavorites({ id, img, price, name, size }))
  }

  const favIndex = favorites.findIndex((item) => item.id === id)

  return (
    <div className='card' onMouseEnter={() => setDisplayIndex(index)} onMouseLeave={() => setDisplayIndex(0)}>
      <div className="shopcard">
        <img className={displayIndex === 0 ? "normal" : "hoverCard"} src={img} alt="shirt" />
        {favIndex >= 0
          ? <FavoriteIcon onClick={handleFavorites} style={{ color: "red" }} sx={{ fontSize: 40 }} className={displayIndex !== 0 ? "normalIconFirst" : "normalIconFirst unvisible"} />
          : <FavoriteIcon onClick={handleFavorites} sx={{ fontSize: 40 }} className={displayIndex !== 0 ? "normalIconFirst" : "normalIconFirst unvisible"} />}
        <ShoppingCartIcon onClick={handleClick} sx={{ fontSize: 40 }} className={displayIndex !== 0 ? "normalIconSecond" : "normalIconSecond unvisible"} />
        <div className={displayIndex !== 0 ? "info" : "info unvisible"}>
          <h3>Product Name: {name}</h3>
          <p>Price: {price} AZN</p>
        </div>
      </div>
    </div>
  )
}

export default Shopcard