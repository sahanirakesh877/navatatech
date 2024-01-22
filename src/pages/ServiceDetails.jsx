import React from "react";
import serviceData from "../Data/ServicesData";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = serviceData.find((a) => a.id === parseInt(serviceId));
  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <div className="text-center container mx-auto">
        <p className="text-3xl pt-12  font-semibold  text-primary inline-block border-b-2 border-sec">
          {service.title}
        </p>
      </div>

      {/* topsection  ie. image and text */}
      <div className="container mx-auto overflow-hidden">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center">
          <div className="bg-white p-4">
            <img src={service.img} alt="..loading" className="w-full h-auto" />
          </div>
          <div className="bg-white p-4">
            <p className="text-gray-700">{service.description}</p>
          </div>
        </div>
      </div>

      {/* pricining and servces features */}
      <div className="text-center text-2xl text-sec container mx-auto ">
        <p className="border-b-2 border-sec inline-block">
          Features We Provide
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                  Basic
                </h2>
              </div>

              <p>{service.p1}</p>
              <ul className="flex-1 space-y-4 text-start">
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list1}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list2}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list3}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list4}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list5}
                </li>
              </ul>

              <Link to="/inquiry">
                <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec rounded-lg hover:bg-primary focus:outline-none">
                  Quick Inquiry
                </button>
              </Link>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                  Profesional
                </h2>
              </div>

              <p>{service.p2}</p>
              <ul className="flex-1 space-y-4 text-start">
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list6}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list7}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list8}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list9}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list10}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list11}
                </li>
              </ul>
              <Link to="/inquiry">
                {" "}
                <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec rounded-lg hover:bg-primary focus:outline-none">
                  Quick Inquiry
                </button>
              </Link>
            </div>

            <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-gray-50 border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex-shrink-0">
                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                  Premium
                </h2>
              </div>

              <p>{service.p3}</p>
              <ul className="flex-1 space-y-4 text-start">
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list12}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list13}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list14}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list15}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list16}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list5}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list17}
                </li>
                <li className="text-gray-500 dark:text-gray-400 list-disc">
                  {service && service.list18}
                </li>
               
              </ul>
              <Link to={"/inquiry"}>
                {" "}
                <button className="inline-flex items-center justify-center px-4 py-2 font-semibold text-white uppercase transition-colors bg-sec rounded-lg hover:bg-primary focus:outline-none">
                  Quick Inquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
