import React from "react";
import CountUp from "react-countup";

const CounterPage = () => {
  return (
    <>
      <div className="bg-purple-100 overflow-hidden ">
        <div className="   py-12 container mx-auto">
          <div className="grid grid-cols-4 text-center ">
            <div>
              <h2 className="text-4xl font-bold">
                <CountUp start={-875.039} end={20} duration={2.75} delay={0}></CountUp>+
              </h2>
              <p>Total projects</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                <CountUp start={-875.039} end={15} duration={2.75} delay={0}></CountUp>+
              </h2>
              <p>Total Employee</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                <CountUp start={-875.039} end={80} duration={2.75} delay={0}></CountUp>%
              </h2>
              <p>Success Rate</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                <CountUp start={-875.039} end={85} duration={2.75} delay={0}></CountUp>%
              </h2>
              <p>satisfied Projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterPage;
