import React from 'react'
import "./addedItems.scss"
import { useDispatch } from 'react-redux'
import { basketQuantity, deleteProduct, calPrice } from '../../store/slices/CardSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';;

const AddedItem = ({ img, price, name, cardQuantity, size, id }) => {

  const cartItems = useSelector((state) => state.cardItem)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calPrice(id))
  }, [cartItems, id, dispatch])

  function increaseQuantity() {
    dispatch(basketQuantity({ id, isIncreased: true }))
  }

  function decreaseQuantity() {
    dispatch(basketQuantity({ id, isIncreased: false }))
  }

  function deleteItem() {
    dispatch(deleteProduct(id))
  }

  return (
    <div className='itemOfBasket'>
      <img src={img} alt="productpic" />
      <div className='itemAbout'>
        <div>
          <h3>Product Name: {name}</h3>
          <p>Price: {price} AZN</p>
          <p>Size: {size}</p>
        </div>
        <div className='buttons'>
          <button onClick={increaseQuantity}>+</button>
          <p>{cardQuantity}</p>
          <button onClick={decreaseQuantity} disabled={cardQuantity === 1}>-</button>
        </div>
        <ClearIcon className='deleteIcon' onClick={deleteItem}>Delete</ClearIcon>
      </div>
    </div>
  )
}

export default AddedItem