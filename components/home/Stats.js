import React, { useEffect, useState } from "react";

export default function Stats() {

  const statistics = [
    ["1000", "Communities Reached"],
    ["500", "Workshops Conducted"],
    ["60000", "Donation collected"],
    ["5", "Years of Impact"]
  ];
  return (
    <div id="stats">
      <div className="pb-20">
        <div className="mx-auto bg-gradient-to-l from-indigo-600 to-indigo-700 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              <div className="mt-20">
                <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white px-4">
                  100% Transparency
                </h2>
              </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                  because you deserve to know when, where, and how your
                  contributions bring a difference in someone&apos;s life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {statistics !== null && statistics[0][0]}+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
               Communities Reached
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {statistics !== null && statistics[1][0]}+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
               Workshops Conducted
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                ₹{statistics !== null && statistics[2][0]}+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Donation collected
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                {statistics !== null && statistics[3][0]}+
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
              Years of Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
