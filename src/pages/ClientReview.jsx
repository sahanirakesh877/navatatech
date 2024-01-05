import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ClientReview = () => {
  const data = [
    {
      img: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg",
      name: "Rakesh kumar sahani",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
    
    {
      img: "https://img.freepik.com/free-photo/businesman-technological-scene_1134-492.jpg?size=626&ext=jpg",
      name: "Prakash lama",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
    {
      img: "https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5157.jpg?size=626&ext=jpg",
      name: "Supreme court",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
    {
      img: "https://img.freepik.com/free-photo/technology-netowrking-binary-code-computer-language_53876-124323.jpg?size=626&ext=jpg",
      name: "Alex",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
    {
      img: "https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-7081.jpg?size=626&ext=jpg",
      name: "John Deo",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
    {
      img: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901785.jpg?size=626&ext=jpg",
      name: "Rolex",
      para: "Best doctor ever i meet , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, ab!",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,

    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start text-primary">
           Our Client Reviews
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-primary px-4 py-2 rounded-lg active:bg-sec"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-primary px-4 py-2 rounded-lg active:bg-sec"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className=" mt-5   gap-4 ">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className=" text-black  border-2   rounded-xl py-3 cursor-pointer "
              key={index}
            >
            <div className="flex justify-center items-center flex-col">
              <div className="w-[130px] h-[130px] overflow-hidden rounded-full flex justify-center items-center ">
                <img
                  src={e.img}
                  alt="img"
                  className=" h-full object-cover w-full "
                  style={{ borderRadius: '50%' }}
                />
              </div>

              <div className=" flex flex-col justify-center items-center">
                <h1 className=" font-semibold text-xl pt-2">{e.name}</h1>
                <p className=" pt-1 px-3 text-center">{e.para}</p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientReview;
