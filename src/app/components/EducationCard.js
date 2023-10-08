import Image from "next/image";
import React from "react";

const EducationCard = ({ info }) => {
  return (
    <div className="group flex flex-row justify-between w-full mt-10 border-2 border-green p-5 rounded-md bg-accent drop-shadow-xl hover:scale-[101%] transition-all duration-50 ease-linear">
      <div className="w-1/3 overflow-hidden p-3">
        <div className="border-2 border-green overflow-hidden rounded-lg">
          <Image src={info.src} height={400} width={400} alt="education-logo" />
        </div>
      </div>

      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold">{info.degree}</h2>
        <h3>{info.name}</h3>
        <h3>{info.graduationDate}</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default EducationCard;