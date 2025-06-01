"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="absolute w-full  bg-background h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-green">
        <h2 className=" text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center">
          Hello!
        </h2>
        <h2 className="text-center">
          My product pages are currently Under construction!
        </h2>
        <Link
          className="text-center border border-lightSlate p-2 rounded-lg mt-4 text-slate hover:bg-lightSlate hover:text-background transition duration-200 ease-in"
          href="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default page;
