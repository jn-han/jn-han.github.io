"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-background overflow-hidden">
      <div className="absolute w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-green">
          <h2 className=" text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center">
            Hello!
          </h2>
          <h2 className="text-center">
            This page is currently under construction. Please come back at
            another time!
          </h2>
          <Link className="text=center" href="/">
            click here to go back to the main page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
