import React, { useState } from "react";
import serviceData from "../Data/ServicesData";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const handlePlanClick = (index) => {
    setSelectedPlan(index);
  };

  return (
    <>
      <div className="container mx-auto bg-white dark:bg-gray-900 overflow-hidden">
        <div className="md:py-[80] pt-10 mx-auto relative">
          <h1 className="text-4xl text-center text-primary font-semibold pb-3">
            Choose a <span className="text-secondary hover-border-b">Plan</span>
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
            <div className="w-[150px] h-1 bg-sec"></div>
          </div>
        </div>
        <div className="pt-10 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-4">
          {serviceData.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-6 text-primary rounded-md shadow-md  cursor-pointer ${
                selectedPlan === index ? "border border-sec " : ""
              }`}
              onClick={() => handlePlanClick(index)}
            >
              <h3 className="text-xl font-semibold">{plan.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          {selectedPlan !== null && (
            <div className="bg-gray-50 p-6 rounded-md shadow-md mt-4">
              <h3 className="text-3xl font-semibold text-sec">
                {serviceData[selectedPlan].title}
              </h3>
              <p className="m-6 text-gray-700 text-wrap text-center ">{serviceData[selectedPlan].description}</p>

              <div className="bg-white dark:bg-gray-800 shadow-lg">
                <div className="container px-6 py-8 mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">



                    <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                          Basic
                        </h2>
                      </div>

                      <p>{serviceData[selectedPlan].p1}</p>
                      <ul className="flex-1 space-y-4 text-start">
                        <li className="text-gray-500 dark:text-gray-400 list-disc   ">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list1}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list2}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list3}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list4}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list5}
                        </li>
                      </ul>

                      <Link to="/inquiry">
                        <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec  rounded-tl-md  rounded-br-md  hover:bg-primary focus:outline-none">
                       Get Pricing Package
                        </button>
                      </Link>
                    </div>



                    <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                          Profesional
                        </h2>
                      </div>

                      <p>{serviceData[selectedPlan].p2}</p>
                      <ul className="flex-1 space-y-4 text-start">
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list6}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list7}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list8}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list9}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list10}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list11}
                        </li>
                      </ul>
                      <Link to="/inquiry">
                        {" "}
                        <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec  rounded-tl-md  rounded-br-md  hover:bg-primary focus:outline-none">
                       Get Pricing Package
                        </button>
                      </Link>
                    </div>


                    <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                          Premium
                        </h2>
                      </div>

                      <p>{serviceData[selectedPlan].p3}</p>
                      <ul className="flex-1 space-y-4 text-start">
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list12}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list13}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list14}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list15}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list16}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list5}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list17}
                        </li>
                        <li className="text-gray-500 dark:text-gray-400 list-disc">
                          {serviceData[selectedPlan] &&
                            serviceData[selectedPlan].list18}
                        </li>
                      </ul>
                      <Link to={"/inquiry"}>
                        {" "}
                        <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec  rounded-tl-md  rounded-br-md  hover:bg-primary focus:outline-none">
                       Get Pricing Package
                        </button>
                      </Link>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pricing;
