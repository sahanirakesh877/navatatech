import React from "react";

const About = () => {
  return (
    <>
      <div className="container  pt-10 mx-auto relative  overflow-hidden">
        <h1 className="text-4xl text-center text-primary font-semibold pb-3">
          Our Mission and
          <span className="text-secondary hover-border-b"> Vision</span>
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <div className="w-[200px]   h-1 bg-sec"></div>
        </div>
      </div>
      <section className="py-18 md:py-">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 items-center">
            <div>
              <img
                src="https://img.freepik.com/free-vector/static-asset-illustration-concept_114360-885.jpg?w=740&t=st=1705054097~exp=1705054697~hmac=d0fc1a16c8b48545d8de0943ac9589f0c5d8115cd54d65f2c6decf833dfe77a2"
                alt="Office Workspace"
                className="rounded-lg  w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-4xl lg:text-2xl text-center font-semibold mb-3 text-primary">
                Elevating Digital Experiences{" "}
                <span className="text-secondary hover-border-b">
                  for Success
                </span>
              </h2>
              <p className="text-gray-900 md:text-base lg:text-md lg:ml-6 mb-4">
                Welcome to <span className="text-primary font-bold">[NAVATA TECH]</span>,
                where innovation meets technology! We specialize in crafting
                exceptional digital solutions that redefine your online
                presence. From cutting-edge web design and custom app
                development to captivating graphics and strategic digital
                marketing, we are your partners in success.
              </p>
              <p className="text-gray-900 text-sm md:text-base lg:text-md lg:ml-6 mb-4">
                Our team of experts harnesses the latest tools and creativity to
                build tailor-made solutions aligned with your brand's vision.
                We're not just about creating websites or apps; we're about
                crafting digital experiences that engage, inspire, and drive
                results. Let's collaborate and propel your business to new
                heights in the digital landscape.
              </p>
              <button className="mx-6 relative border-2 border-sec bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
