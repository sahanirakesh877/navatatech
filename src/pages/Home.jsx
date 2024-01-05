import React from "react";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Teams from './Teams';
import ClientReview from './ClientReview';

const Home = () => {
  return (
    <>
   
      <div class="home  ">
        <div class="content container mx-auto">
          <h5>
            Welcome To Our <span className="text-sec">NAVATA</span> TECH
          </h5>
          <h1>
          Innovations <span class="changecontent"></span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            nisi.
          </p>
          <a href="#book">Get Enroll</a>
        </div>
      </div>
      <Services />
      <About />
      <Teams />
      <Contact />
      <ClientReview/>
    </>
  );
};

export default Home;
