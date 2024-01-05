import React from "react";
import serviceData from "../Data/ServicesData";

const Services = () => {
  return (
    <>
      <div className="container md:py-[80] py-8 pt-10 mx-auto">
        <h1 className="text-4xl text-center text-primary font-semibold ">
         What We<span className="text-secondary hover-border-b">Build</span>
        </h1>
      </div>

      <div className="container mx-auto pb-[100px] grid lg:grid-cols-4 sm:grid-cols-2 gap-16 ">
        {serviceData.map((a) => {
          return (
            <>
              <div key={a.id}>
                <div className="group shadow-lg p-4 text-center hover:bg-primary hover:text-white rounded duration-1000">
                  <i className={a.iconClass}/>
                  <h3 className="text-xl py-2">{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Services;
