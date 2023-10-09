import Image from "next/image";
import React from "react";

const EducationCard = ({ info }) => {
  return (
    <div className="group flex flex-row justify-between w-full mt-10 border-2 border-green p-5 rounded-md bg-accent drop-shadow-xl hover:scale-[101%] transition-all duration-50 text-white ease-linear">
      <div className="w-1/3 overflow-hidden p-3">
        <div className="border-2 border-green overflow-hidden rounded-lg">
          <Image src={info.src} height={400} width={400} alt="education-logo" />
        </div>
      </div>

      <div className="w-2/3 p-4">
        <h2 className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg  font-semibold">
          {info.degree}
        </h2>
        <h3 className="text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
          {info.name}
        </h3>
        <h3 className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
          {info.graduationDate}
        </h3>
        <ul className="mx-5 list-disc text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">
          {info.relevantWork.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;
