import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About HPO</p>
      <br />
      <p className="text-xl md:w-8/12 text-center text-gray-500 my-4">
        Empowering Communities Through Health Promotion
      </p>
      <p className="text-gray-500 text-base w-full md:w-8/12 text-center my-4">
        HPO (Health Promotion Organization) is a non-profit organization
        dedicated to empowering individuals and communities with the knowledge
        and resources they need to achieve optimal health. We believe that good
        health is a fundamental right, and that everyone deserves access to the
        information and tools necessary to live a healthy life.
        <br />
        <br />
        Our mission is to promote health equity by advocating for access to
        preventive healthcare services and empowering individuals, especially in
        underprivileged communities, to take control of their health.
        <br />
        <br />
        We aim to establish partnerships with public health departments to offer
        our resources in community clinics and schools. By training more
        volunteers and forging connections with international NGOs, we hope to
        amplify our impact on a global scale. Ultimately, we envision a future
        where health literacy is a cornerstone of empowered communities,
        allowing everyone to make informed choices for a healthier, happier
        life.
      </p>
    </div>
  );
}
