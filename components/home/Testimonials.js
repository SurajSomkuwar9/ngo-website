import React from "react";

export default function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">
            Hear from our Members
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is why you should trust us
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Before HPO came to our area, I never understood the
                importance of handwashing. Now, thanks to their workshops, I
                know how to keep my family safe from preventable diseases.
                HPO doesn't just talk about health, they make it practical and
                accessible for everyone.
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Sanjay Patel
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Farmer, Mumbai
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                  alt="commas"
                />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Diabetes runs in my family, but I never knew much about managing
                it. HPO's outreach program in my area provided clear
                information on diet, exercise, and medication adherence. The
                sessions were translated into Hindi and Marathi, making it easy for everyone
                to understand. Thanks to HPO, I feel more in control of my
                health and can prevent complications.
              </p>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1595502124338-950db27ea1c7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Mr. Ashutosh Kumar
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Resident of Lower Parel,
                </p>
                <p className="text-base leading-4 mt-2 text-left text-gray-600">
                  Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
