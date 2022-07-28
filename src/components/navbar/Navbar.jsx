import React from 'react'
import { useState } from 'react';
import "./navbar.scss"
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const navigate = useNavigate()

    const badgeCount = useSelector((state) => state.totalCount)

    const ChangeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", ChangeBackground)

    return (
        <div className="main">
            <div className={navbar ? "Navbar active" : "Navbar"}>
                <MenuIcon fontSize='large' className='icons' />
                <h1>ONLINE STORE</h1>
                <span>
                    <SearchIcon fontSize='large' className='icons' />
                    <TextField style={{ marginLeft: "6px", marginRight: "20px" }} size='small' id="standard-basic" label="Search" variant="standard" />
                    <PermIdentityIcon fontSize='large' className='icons' />
                    <FavoriteBorderIcon onClick={() => { navigate("/favorite-items") }} fontSize='large' className='icons' />
                    <AddShoppingCartIcon onClick={() => { navigate("/added-items") }} fontSize='large' className='icons' />
                    <Badge style={{ marginLeft: "10px", marginBottom: "14px" }} max={9} badgeContent={badgeCount} color="primary" />
                </span>
            </div>
        </div>
    )
}

export default Navbar