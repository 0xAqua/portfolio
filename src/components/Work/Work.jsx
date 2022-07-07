import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Work.css"
import images from "../../constance/images";
import data from "../../constance/data";

const Work = () => {
  return (
    <section className="work">
      <div className="Container workContainer">
        <div className="SectionTitle">
          <h2>Service</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{delay: 3000}}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
        <SwiperSlide>
            <div className="workContent">
              <div className="workImage">
                <img src={images.workImg1} alt="作成した作品の画像" className="Img" />
              </div>
              <h3>Web Site</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="workContent">
            <div className="workImage">
              <img src={images.workImg2} alt="作成した作品の画像" className="Img" />
            </div>
            <h3>Web Site</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="workContent">
            <div className="workImage">
              <img src={images.workImg3} alt="作成した作品の画像" className="Img" />
            </div>
            <h3>Web Site</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="workContent">
            <div className="workImage">
              <img src={images.workImg4} alt="作成した作品の画像" className="Img" />
            </div>
            <h3>Web Site</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="workContent">
            <div className="workImage">
              <img src={images.workImg5} alt="作成した作品の画像" className="Img" />
            </div>
            <h3>Web Site</h3>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>        
    </section>
    )
}

export default Work

