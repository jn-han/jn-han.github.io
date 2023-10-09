import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ info }) => {
  return (
    <a
      href={info.link}
      className="group flex flex-row justify-between w-full mt-10 border-2 border-green p-5 rounded-md bg-accent drop-shadow-xl hover:drop-shadow-2xl hover:scale-[101%] transition-all duration-50 ease-linear mx-5 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 text-white "
    >
      <div className="w-full sm:w-full md:w-full lg:w-4/6 xl:w-4/6 2xl:w-4/6 p-3 ">
        <p className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-md">
          {info.date}
        </p>
        <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-wrap py-1">
          {info.name}
          <FontAwesomeIcon
            className="w-4 mx-2 group-hover:-translate-y-1 transition duration-200 ease-in-out"
            icon={faSquareArrowUpRight}
          />
        </h2>
        <h3 className="text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl py-1">
          {info.place} - {info.award}
        </h3>
        <p className="text-sm md:text-md lg:text-md xl:text-md 2xl:text-md py-1">
          {info.description}
        </p>
        <div className="flex flex-wrap w-full items-center text-sm md:text-md lg:text-md xl:text-md 2xl:text-md ">
          <p className="pr-2 text-green ">Built With: </p>

          {info.builtWith.map((item, key) => {
            return (
              <p
                className="px-3 m-1 bg-green bg-opacity-20  text-green rounded-full"
                key={key}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div className="w-0 sm:w-0 md:w-0 lg:w-2/6 xl:w-2/6 2xl:w-2/6 flex flex-row items-center invisible sm:invisible md:invisible lg:visible xl:visibe 2xl:visible ">
        <div className="border-2 border-green rounded-xl overflow-hidden shadow-2xl brightness-90 hover:brightness-100 transition duration-500 ease-in-out h-54 ">
          <Image
            className="h-full object-top object-cover group-hover:scale-105 transition duration-50 ease-in-out "
            src={info.src}
            width={1000}
            height={1000}
            alt="plotgen demo"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
