"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Taskbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navLink = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Education",
      link: "#education",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="fixed w-full top-5 z-10 scroll-smooth">
      <div className="flex w-full justify-center">
        <div className="flex flex-row text-center justify-evenly fixed bg-foreground w-auto py-2 rounded-full text-green border-2 border-green">
          {navLink.map((item) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <a
                className={` ${
                  isActive ? "bg-white" : "bg-red"
                } px-4 mx-3 py-1 rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out`}
                key={item.name}
                href={item.link}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
