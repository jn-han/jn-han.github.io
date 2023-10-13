import React from "react";
import Image from "next/image";
import {
  faGripLinesVertical,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-24 p-10 md:p-0 lg:p-0 xl:p-0 2xl:p-0 flex flex-col justify-center items-center text-green w-full md:w-3/4  lg:w-3/4 xl:w-3/4 2xl:w-3/4">
        <h2 className="text-green text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl border-b-2 w-full text-center border-accent pb-5">
          About Josh
        </h2>
        <div className="w-full mt-4 flex flex-row text-lg">
          <div className="text-slate w-full text-left">
            <p className="">
              Hello! I&apos;m Josh, and I love to create, build, and tinker with
              different types of technology. My passion for tech began when I
              built my first computer at the age of 12. Since then, I knew that
              I wanted to pursue a lifelong career in technology.
              <br />
              <br />
              Now, in the present day, I discover new types of technology
              through:
            </p>
            <ul className="list-square list-inside">
              <li>engaging in hackathons</li>
              <li>talking with people from the tech industry</li>
              <li>creating applications that help the people around me</li>
            </ul>
            <br />
            <p>My life outside tech consists of:</p>
            <ul className="list-square list-inside">
              <li>
                being a psychology major at the University of British Columbia
              </li>
              <li>playing volleyball</li>
              <li>Running and owning a small 3D printing business</li>
            </ul>
            <br></br>
            <p>
              No matter what, I am always open to new opportunities and
              experiences! If you would like to chat, please feel free to email
              me,&nbsp;
              <a
                className="text-green underline"
                href="https://linkedin.com/in/jn-han"
              >
                connect on LinkedIn
              </a>
              , or&nbsp;
              <a
                className="text-green underline"
                href="https://calendly.com/joshuahnguyen/30min"
              >
                schedule a coffee chat with me
              </a>
              !
            </p>
          </div>
          {/* <div className="flex w-1/2 items-center justify-center">
            <div
              className="w-1/2 border-2 border-green overflow-hidden aspect-square position-center
              "
            >
              <Image
                src="/mePhoto.jpg"
                width={500}
                height={500}
                className="object-bottom"
              ></Image>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
