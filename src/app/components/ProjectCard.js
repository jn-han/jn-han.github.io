import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ info }) => {
  return (
    <a
      className="group relative hover:shadow-lg w-3/4 rounded-lg m-4 text-lightSlate scale-[98%] hover:scale-100 transition duration-300 ease-in-out flex flex-col items-center overflow-hidden"
      href={info.link}
    >
      <div className="relative w-full rounded-lg overflow-hidden">
        <Image
          src={info.src}
          alt={info.name}
          width={3462}
          height={963}
          className="transition duration-500 ease-in-out "
        />
      </div>
    </a>
  );
};

export default ProjectCard;
