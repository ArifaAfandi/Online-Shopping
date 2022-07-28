import React from 'react';
import "./Cards.scss";
import HomePic from '../navbar/HomePic';
import Shopcard from "./Shopcard";
import yellow from "./images/halter-yaka-fitilli-crop-neon-yesil-9-2f4b.jpg";
import purple from "./images/madonna-yaka-crop-lila-4261-a.jpg";
import blue from "./images/madonna-yaka-crop-mavi-2a38-e.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Contact from "../Contact"
import Footer from '../Footer';


const Cards = () => {
  return (
    <div>
      <HomePic />
      <h2 style={{ marginTop: "40px", width: "97%", marginLeft: "auto", marginRight: "auto", letterSpacing: "2px", fontSize: "30px" }}>Ən yeni məhsullar</h2>
      <div className='cards'>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          navigation
          speed={800}
          slidesPerView={3}
          loop
          className='Swiper'
        >
          <SwiperSlide className='SwiperSlide'>
            <Shopcard img={yellow} index={1} id={1} price={50} name={"Yellow crop for women"} size={"M"} />
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <Shopcard img={purple} index={2} id={2} price={40} name={"Purple blouse for women"} size={"S"} />
          </SwiperSlide>
          <SwiperSlide className='SwiperSlide'>
            <Shopcard img={blue} index={3} id={3} price={60} name={"Blue blouse for women"} size={"XS"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Cards