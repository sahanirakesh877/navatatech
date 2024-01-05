import React from "react";
import TeamData from "../Data/TeamData";
import { FaFacebook,  FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
const Teams = () => {
  return (
    <>
      <div class="container md:py-[80]  pt-10 mx-auto ">
        <h1 class="text-4xl text-center text-primary font-semibold">
          Our <span class="text-secondary hover-border-b">Teams</span>
        </h1>
      </div>

      <section className="bg-white">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {TeamData.map((a) => {
        return (
          <div
            className="text-center card text-gray-500 dark:text-gray-400 border px-2 py-4 shadow-lg    transition duration-300 ease-in-out transform hover:scale-110  "
            key={a.id}
          >
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={a.img}
              alt={`${a.name} Avatar`}
            />
            <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{a.name}</p>
            </h3>
            <p>{a.Profession}</p>
            <ul className="flex justify-center mt-4 space-x-4">
              <li className="text-primary text-xl hover:text-sec"><FaFacebook /></li>
              <li className="text-primary text-xl hover:text-sec"><FaInstagram /></li>

              <li className="text-primary text-xl hover:text-sec"><FaLinkedinIn/></li>


              <li className="text-primary text-xl hover:text-sec"><FaWhatsapp /></li>

            </ul>
          </div>
        );
      })}
    </div>
  </div>
</section>

    </>
  );
};

export default Teams;
