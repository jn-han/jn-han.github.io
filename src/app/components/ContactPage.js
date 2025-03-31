import React from "react";
import Image from "next/image";
import {
  faCode,
  faEnvelope,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import contactLinks from "../config/contactLinks";
import Link from "next/link";
import AboutNav from "./AboutNav";

const ContactPage = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-between"
    >
      <div className="mt-10 p-10 md:p-0 flex flex-col justify-center items-center text-green w-full md:w-3/4 flex-1">
        <h2 className="text-green text-xl md:text-3xl border-b-2 w-full text-center border-accent pb-5">
          About
        </h2>

        <div className="flex flex-row w-full justify-evenly ">
          <div className="flex pt-6 flex-col justify-between w-1/2">
            <AboutNav />
            {/* <div className="text-white w-full text-left">
              <p>
                Hello! I'm Josh, and I love to create, build, and tinker with
                different types of technology.
              </p>

              <p className="mt-4">
                I am always open to new opportunities and experiences! If you
                would like to chat, please feel free to email me,&nbsp;
                <a
                  className="text-green link-underline link-underline-black link-underline-hove"
                  href="https://linkedin.com/in/jn-han"
                >
                  connect on LinkedIn
                </a>
                , or&nbsp;
                <a
                  className="text-green link-underline link-underline-black link-underline-hove "
                  href="https://calendly.com/joshuahnguyen/30min"
                >
                  schedule a coffee chat with me!
                </a>
              </p>
            </div> */}

            <div className="mt-2 space-y-2">
              <Link
                href="/notes"
                className="text-white flex items-center group link-underline link-underline-black link-underline-hover w-fit"
              >
                Josh's Notes
                <FontAwesomeIcon
                  className="w-4 mx-2 group-hover:-translate-y-0.5 transition duration-200 ease-in-out"
                  icon={faSquareArrowUpRight}
                />
              </Link>
              <Link
                href="/archived"
                className="text-white flex items-center group link-underline link-underline-black link-underline-hover w-fit"
              >
                Josh's Project Archive
                <FontAwesomeIcon
                  className="w-4 mx-2 group-hover:-translate-y-0.5 transition duration-200 ease-in-out"
                  icon={faSquareArrowUpRight}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-items-center lg:ml-24 ">
            <div className="aspect-square rounded-xl w-2/3 m-3">
              <Image
                src="/mePhoto.jpg"
                width={600}
                height={600}
                className="rounded-xl"
                alt="Josh"
              />
            </div>
            <div className="flex text-white dark:text-slate flex-row w-2/3 justify-between">
              <a
                className="flex items-center mt-2 group"
                href={contactLinks.email}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  className=" mx-2 hover:text-green dark:hover:text-green hover:-translate-y-0.5 transition duration-200 ease-in-out"
                />
              </a>

              <a
                className="flex items-center mt-2 group"
                href={contactLinks.linkedin}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className=" mx-2 hover:text-green dark:hover:text-green hover:-translate-y-0.5 transition duration-200 ease-in-out"
                />
              </a>

              <a
                className="flex items-center mt-2 group"
                href={contactLinks.github}
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  size="xl"
                  className="mx-2 hover:text-green dark:hover:text-green hover:-translate-y-0.5 transition duration-200 ease-in-out"
                />
              </a>

              <a
                className="flex items-center mt-2 group"
                href={contactLinks.devpost}
              >
                <FontAwesomeIcon
                  icon={faCode}
                  size="xl"
                  className=" mx-2 hover:text-green dark:hover:text-green hover:-translate-y-0.5 transition duration-200 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
