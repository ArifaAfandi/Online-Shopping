import React from 'react';
import { useSelector } from "react-redux";
import AddedItem from "./AddedItem";
import Button from '@mui/material/Button';
import "./addedItems.scss"
import { useEffect } from 'react';
import { totalPrice, clearAll } from '../../store/slices/CardSlice';
import { useDispatch } from 'react-redux';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer';

const Basket = () => {
  const products = useSelector((state) => state.cardItem)
  let total = useSelector((state) => state.totalPrice)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(totalPrice())
  }, [products, dispatch])

  function clearItems() {
    dispatch(clearAll())
  }

  return (
    <div>
      <div className='basketMain'>
        <div className='products'>
          <div className="header">
            <div className='backIcon' onClick={() => { navigate(-1) }}><KeyboardReturnIcon sx={{ fontSize: 40 }} /></div>
            <h1>Səbətiniz</h1>
            <Button onClick={clearItems} className='deleteAll' variant='contained' disabled={products.length === 0}>HAMISINI SİL</Button>
          </div>
          {products.length >= 1 ? products.map((product) => <AddedItem key={product.id} {...product} />) : <div className='empty'>(Səbət boşdur)</div>}
        </div>
        <div className="total">
          <h1>Ümumi sifariş</h1>
          <div><span>Təxmini göndərmə</span><span>Ödənişsizdir</span></div>
          <div><span>Çatdırılma xidməti</span><span>Ödənişsizdir</span></div>
          <div><h3>Ümumi məbləğ</h3><h3>{total} AZN</h3></div>
          <button>Ödənişə keç</button>
        </div>
      </div>
      <div style={{ marginTop: "180px" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Basket