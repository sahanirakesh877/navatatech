import React, { useState } from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Web Design",
      details: "Craft a stunning online presence with our expert web design services. We'll create a website tailored to your brand, ensuring a seamless user experience and eye-catching visuals.",
    },
    {
      title: "Digital Marketing",
      details: "Boost your online visibility and reach your target audience with our comprehensive digital marketing strategies. From social media management to SEO optimization, we've got your online success covered.",
    },
    {
      title: "Graphics Design",
      details: "Make a lasting impression with captivating graphic designs. Our team of creative designers will bring your brand to life through visually appealing logos, banners, and marketing materials.",
    },
    {
      title: "App Development",
      details: "Turn your ideas into powerful, user-friendly mobile applications. Our app development services encompass everything from concept to deployment, ensuring a seamless and functional experience for your users.",
    },
    {
      title: "Software Development",
      details: "Custom software solutions tailored to your business needs. Streamline your operations and enhance efficiency with our expert software development services, designed to propel your business forward.",
    },
    {
      title: "Web Development",
      details: "Bring your website vision to reality with our professional web development services. Our team will code and optimize your site for performance, ensuring a fast, secure, and user-friendly experience.",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(0);

  const handlePlanClick = (index) => {
    setSelectedPlan(index);
  };

  return (
    <div className="container mx-auto bg-white dark:bg-gray-900 overflow-hidden">
      <div className="md:py-[80] pt-10 mx-auto relative">
        <h1 className="text-4xl text-center text-primary font-semibold pb-3">
          Choose a <span className="text-secondary hover-border-b">Plan</span>
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
          <div className="w-[150px] h-1 bg-sec"></div>
        </div>
      </div>
      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-gray-50 p-6 text-primary rounded-md shadow-md  cursor-pointer ${
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
          <div className="bg-gray-200 p-6 rounded-md shadow-md mt-4">
            <h3 className="text-2xl font-semibold text-sec">
              {pricingPlans[selectedPlan].title}
            </h3>
            <p className="mt-4">{pricingPlans[selectedPlan].details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
