import React from 'react';
import styles from './Footer.module.scss';
import FooterSections from './FooterSections';
import logo1 from "./shopcards/images/Instagram_logo_2016.svg.png";
import logo2 from "./shopcards/images/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png";
import logo3 from "./shopcards/images/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png";
import logo4 from "./shopcards/images/LinkedIn_logo_initials.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <FooterSections childrenStyle={styles.logosDiv} classHeader={styles.header} header={"Online Magaza"} classMain={styles.main} main={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."}>
                <img src={logo1} alt="logo" />
                <img src={logo2} alt="logo" />
                <img src={logo3} alt="logo" />
                <img src={logo4} alt="logo" />
            </FooterSections>
            <FooterSections classHeader={styles.links} childrenStyle={styles.linkorder} header={"Lazimli linkler"}>
                <div>
                    <p>Ana sehife</p>
                    <p>Man fashion</p>
                    <p>Woman fashion</p>
                    <p>Accessories</p>
                </div>
                <div>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>My Account</p>
                    <p>Terms of Use</p>
                </div>
            </FooterSections>
            <FooterSections childrenStyle={styles.elaqe} classHeader={styles.links} header={"Bizimle elaqe saxla"}>
                <p><LocationOnIcon /> 622 Dixie Path , South Tobinchester 98336</p>
                <p><CallIcon /> +1 234 56 78</p>
                <p><ForwardToInboxIcon /> contact@onlinemagaza.dev</p>
            </FooterSections>
        </div>
    )
}

export default Footer