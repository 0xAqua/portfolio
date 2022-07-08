import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Work.css"
import data from "../../constance/data";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="Container workContainer">
        <div className="SectionTitle">
          <h2>WORK</h2>
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
          <>
            {
              data.works.map((work, index) => {
                return (
                  <SwiperSlide>
                    <a href="" className="WorkLink">
                      <div className="workContent" key={index}>
                        <div className="workImage">
                          <img src={work.img} alt="作成した作品の画像" className="Img" />
                        </div>
                        <h3>{work.title}</h3>
                      </div>
                    </a>
                  </SwiperSlide>
                )
              })
            }
          </>
      </Swiper>
        </div>        
    </section>
    )
}

export default Work

