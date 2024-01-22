import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientData from "../Data/ClientData";

const ClientReview = () => {
  // For arrow design purpose
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "purple" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container  pt-24 mx-auto">
          <div className="relative ">
            <h1 className="text-4xl text-center  text-primary font-semibold pb-3">
              Our Client{" "}
              <span className="text-secondary hover-border-b">Reviews</span>
            </h1>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
              <div className="w-[150px]   h-1 bg-sec"></div>
            </div>
          </div>

          <Slider {...settings}>
            {clientData.map((a, id) => (
              <div
                key={id}
                className="flex flex-wrap  justify-center items-center pt-10 pb-12"
              >
                <div className="p-4 w-full">
                  <div className="h-full bg-gray-100 p-8 rounded">
                    <p className="leading-relaxed mb-6">
                      {a.para.substring(0, 250)}....
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={a.img}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {a.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {a.profession}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ClientReview;
