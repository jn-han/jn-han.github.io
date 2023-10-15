import React from "react";
import Image from "next/image";
import {
  faCode,
  faEnvelope,
  faGripLinesVertical,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import contactLinks from "../config/contactLinks";

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
          <div className="text-slate w-full text-left p-7">
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
          <div className="flex w-1/2 flex-col items-start justify-center ml-24">
            <div
              className="border-2 border-green overflow-hidden aspect-square position-center rounded-3xl w-3/5
              m-3"
            >
              <Image
                src="/mePhoto.jpg"
                width={500}
                height={500}
                className="object-bottom"
              ></Image>
            </div>
            <div className=" p-3 w-full flex flex-col">
              <div className="flex flex-row text-slate">
                <FontAwesomeIcon
                  className="w-6 mx-2"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                <div>
                  <span className="">Email: </span>
                  <a className="text-white" href={contactLinks.email}>
                    joshuahnguyen@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-row text-slate">
                <FontAwesomeIcon
                  className="w-6 mx-2"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
                <div>
                  <span className="">LinkedIn: </span>
                  <a className="text-white" href={contactLinks.linkedin}>
                    jn-han
                  </a>
                </div>
              </div>
              <div className="flex flex-row text-slate">
                <FontAwesomeIcon
                  className="w-6 mx-2"
                  icon={faGithubSquare}
                ></FontAwesomeIcon>
                <div>
                  <span className="">Github: </span>
                  <a className="text-white" href={contactLinks.github}>
                    jn-han
                  </a>
                </div>
              </div>
              <div className="flex flex-row text-slate">
                <FontAwesomeIcon
                  className="w-6 mx-2"
                  icon={faCode}
                ></FontAwesomeIcon>
                <div>
                  <span className="">Devpost: </span>
                  <a className="text-white" href={contactLinks.devpost}>
                    jn-han
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full text-left">Tech I know</div> */}
      </div>
    </section>
  );
};

export default ContactPage;
