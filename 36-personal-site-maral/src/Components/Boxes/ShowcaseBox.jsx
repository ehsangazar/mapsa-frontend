import React from "react";
import InnerContainer from "../Containers/InnerContainer";
import ShowcaseInfo from "../SideBars/ShowcaseInfo";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Showcase() {
  const [isActive, setIsActive] = React.useState(false);
  const [name, setName] = React.useState("");

  const typeMyWord = (sampleString) => {
    return sampleString.substr(0, 1);
  };

  React.useEffect(() => {
    setName(typeMyWord("Ehsan Gazar"));
  }, []);

  React.useEffect(() => {
    window.ityped.init(document.querySelector(".ityped"), {
      strings: [
        "I love programming!",
        "I make web sites using php and js",
        "It is very interesting!",
      ],
      loop: true,
    });
  }, []);

  return (
    <InnerContainer className="inner-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <div className="showcase d-grid">
        <h1>
          Hello! How are you?
          <br />
          <span className="ityped"></span>
        </h1>
        <motion.div
          className="block"
          onClick={() => setIsActive(!isActive)}
          animate={{
            Skew: isActive ? 0 : 10,
          }}
        >
          Hello Framer motion
        </motion.div>
        <div>{name}</div>
        <ShowcaseInfo
          explanation={
            " Creating, using computer tools, has always been my number 1 passion. I was a senior business management student when I was first introduced to front-end web development. A journey to create, using programming languages!"
          }
        />
      </div>
    </InnerContainer>
  );
}
