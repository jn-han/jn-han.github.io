import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const ProjectCard = ({ info }) => {
  return (
    <a
      className="h-auto drop-shadow-xl sm:h-96 md:h-96 lg:96 xl:h-96 2xl:h-96 w-full border-2 border-lightSlate rounded-lg relative m-3 text-lightSlate p-4 scale-[98%] hover:scale-100 transition duration-300 ease-in-out flex flex-col justify-start items-center"
      href={info.link}
    >
      <div className="w-full">
        <Image
          src={info.src}
          layout="fill"
          objectFit="cover"
          alt="plotgen demo"
          className="opacity-100 hover:opacity-0 transition duration-300 ease-in-out rounded-md invisible sm:visible md:visible lg:visible xl:visible 2xl:visible"
        />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full p-3 space-y-3">
        <p className="text-sm md:text-md lg:text-md xl:text-md 2xl:text-md">
          {info.date}
        </p>
        <h2 className="text-3xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-wrap py-1 text-lightSlate">
          {info.name}
          <FontAwesomeIcon
            className="w-4 mx-2 group-hover:-translate-y-0.5 transition duration-700 ease-in-out text-lightSlate"
            icon={faSquareArrowUpRight}
          />
        </h2>
        <h3 className="text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl py-1">
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
                className=" px-3 m-1 bg-green bg-opacity-20  text-green rounded-full"
                key={key}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
