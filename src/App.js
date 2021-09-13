import React, { useCallback, useRef, useState } from "react";
import Moveable from "react-moveable";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "./App.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

function App() {
  const [target, setTarget] = useState(null);
  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);
  const swiperRef = useRef(null);
  const moveableRef = useRef(null);
  const clickHandler = useCallback((index) => {
    const contents = [content1, content2, content3];
    setTarget(contents[index].current);
  }, []);

  return (
    <div className="App">
      <div className="btn" onClick={() => clickHandler(1)}>
        select 2nd slide
      </div>
      {swiperRef.current ? (
        <Moveable
          target={target}
          ref={moveableRef}
          zoom={1}
          snapContainer={swiperRef.current}
          snappable
          draggable={true}
          resizable={true}
          snapCenter={true}
        ></Moveable>
      ) : null}

      <Swiper
        initialSlide={1}
        allowTouchMove={false}
        ref={swiperRef}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={1.4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={"10%"}
        id="swiper"
      >
        <SwiperSlide key={1} className="slide" style={{ background: "red" }}>
          <div className="slide-content" ref={content1}>
            1
          </div>
        </SwiperSlide>
        <SwiperSlide key={2} className="slide" style={{ background: "green" }}>
          <div className="slide-content" ref={content2}>
            2
          </div>
        </SwiperSlide>
        <SwiperSlide key={3} className="slide" style={{ background: "blue" }}>
          <div className="slide-content" ref={content3}>
            3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
