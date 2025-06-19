import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { skills } from "../../data";

const Skills = () => {
  const swiperRef = useRef(null);

  return (
    <div
      onMouseEnter={() => {
        if (swiperRef.current) {
          swiperRef.current.autoplay.stop();
        }
      }}
      onMouseLeave={() => {
        if (swiperRef.current) {
          swiperRef.current.autoplay.start();
        }
      }}
    >
      <Swiper
        className="skills__carousel"
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        freeMode={true}
        freeModeMomentum={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {skills.map(({ title, imgLogo }, index) => (
          <SwiperSlide key={index}>
            <div className="skills__item">
              <img src={imgLogo} alt={title} />
              <p>{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
