import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

const ProjectCard = ({ info }) => {
  const isClicked = false;
  return (
    <a
      href={info.link}
      className="group flex flex-row justify-between w-full mt-10 rounded-md  drop-shadow-xl hover:drop-shadow-2xl hover:scale-[101%] 
      hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] 
      border border-slate
      hover:bg-lightNavy
      transition-all duration-50 ease-linear mx-5 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 text-white "
    >
      <div className="p-5">
        <div className="(isClicked ? hidden : invisible)">
          <Image
            className="h-full object-top object-cover transition duration-50 ease-in-out "
            src={info.src}
            width={1000}
            height={1000}
            alt="plotgen demo"
          />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full p-3 (isClicked ? visible : invisible)">
          <p className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-md">
            {info.date}
          </p>
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-wrap py-1">
            {info.name}
            <FontAwesomeIcon
              className="w-4 mx-2 group-hover:-translate-y-0.5 transition duration-200 ease-in-out"
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
      </div>
    </a>
  );
};

export default ProjectCard;
