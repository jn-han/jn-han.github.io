import React from "react";
import { faGripLinesVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EducationCard from "./EducationCard";
import EDUCATION from "../config/education-config";

const EducationPage = () => {
  return (
    <section
      id="education"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-24 flex flex-col justify-center items-center text-green md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/2">
        <h2 className="text-green text-5xl">My Education</h2>
        <FontAwesomeIcon className="w-4 pt-10 " icon={faGripLinesVertical} />
        {EDUCATION.map((items, key) => (
          <EducationCard info={items} key={key} />
        ))}
      </div>
    </section>
  );
};

export default EducationPage;
