import React from "react";
import Slider from "react-slick";

const images = [
  {
    photo:
      "https://admin.donde.co/wp-content/uploads/2019/02/Banner-Foto-04.png",
    label: "image1"
  },
  {
    photo:
      "https://admin.donde.co/wp-content/uploads/2019/02/Imagen-para-Head-eventos-Home-Dónde-fixed.jpg",
    label: "image2"
  },
  {
    photo:
      "https://admin.donde.co/wp-content/uploads/2019/02/Imagen-para-Head-eventos-Home-Dónde-fixed.jpg",
    label: "image2"
  }
];
// const image1 =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgZh9NCXFAHjx_uAQeKf6rRQjtNi08KLGTycKn_V1wyBFF2kS";
// const image2 =
//   "https://swiperxapp.com/wp-content/uploads/2016/10/SwipeRx-Winners2-2.jpg";
class About extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slickNext: true,
      slickPrevious: true,
      swipe: true
    };
    return (
      <Slider {...settings}>
        {images.map((step) => (
          <div key={step.label}>
            <img
              src={step.photo}
              alt={step.label}
              style={{
                borderRadius: "15px",
                height: "300px",
                display: "block",
                overflow: "hidden",
                width: "100%"
              }}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default About;
