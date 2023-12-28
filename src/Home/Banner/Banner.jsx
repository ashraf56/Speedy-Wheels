import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from '../../assets/green-easter-car-with-eggs-copy-space.jpg'
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Parallax, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <div className='mt-5' >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg "
          style={{
            "backgroundImage":
              `url(${img})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className=" py-2  " data-swiper-parallax="-300">
            <h1>Race to Adventure: <br /> Explore our Exciting Toy Car  <br /> Collection!
            </h1>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Discover a World of Speed and Adventure
          </div>
          <div className="text py-2" data-swiper-parallax="-100">
            <p>
              Race to Adventure: Explore our Exciting Toy Car Collection! Unleash your inner speedster with our extensive selection of toy cars, ranging from sleek race cars to rugged off-roaders. Fuel your imagination and ignite epic adventures on every track. Get ready to experience the thrill of victory and the joy of racing with Speedy Wheels!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" py-2" data-swiper-parallax="-300">
            <h1>Speedy Wheels Specials: <br /> Discover Limited-Time Offers <br />on Fast and Furious Toys!
            </h1>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Limited-Time Deals for Racing Enthusiasts
          </div>
          <div className="text py-2" data-swiper-parallax="-100">
            <p>
              Speedy Wheels Specials: Discover Limited-Time Offers on Fast and Furious Toys! Don't miss out on our exclusive deals and discounts. From high-performance race cars to action-packed playsets, we have something for every young racing enthusiast. Hurry and grab these limited-time offers before they zoom away!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="" data-swiper-parallax="-300">
            <h1>Rev Up the Fun: <br />  Experience Thrilling <br /> Races with  our Remote <br /> Control Cars!
            </h1>
          </div>
          <div className="subtitle " data-swiper-parallax="-200">
            Take Control and Experience the <br /> Thrill of Remote Control Racing
          </div>
          <div className="text py-2" data-swiper-parallax="-100">
            <p>
              Rev Up the Fun: Experience Thrilling Races with our Remote Control Cars! Take control of the excitement with our remote control car collection. Feel the adrenaline rush as you navigate sharp turns, speed down straightaways, and conquer obstacles. Get ready to race against friends or challenge yourself to daring stunts. Get your hands on our remote control cars and let the excitement begin!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;