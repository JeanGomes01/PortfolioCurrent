import { Swiper, SwiperSlide } from "swiper/react";
import { skills } from "../../data";
/*import { CircularProgressbar } from 'react-circular-progressbar';*/
import "react-circular-progressbar/dist/styles.css";
import "swiper/css";

const Skills = () => {
  return (
    <Swiper
      className="skills__carousel"
      spaceBetween={20}
      loop={true}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1440: { slidesPerView: 5 },
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
  );
};

export default Skills;
