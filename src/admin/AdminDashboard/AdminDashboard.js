import React, { useState } from "react";
import CircleGraph from "./CircleGraph";

import Doctors from "../Doctors/Doctors";
import Patients from "../PatientsList/Patients";
import Appointments from "../Appointments/Appointments";
import circle1 from "../../assets/patient_icon.png";
import circle3 from "../../assets/broken-leg.png";
import circle2 from "../../assets/calendar_icon.png";
// Define your circle graph data
const circleGraphData = [
  {
    label: "Doctors",
    value: 168,
    imageSrc: circle2,
    color: "#0dcaf0",
  },
  {
    label: "Patients",
    value: 487,
    imageSrc: circle1,
    color: "#34d399",
  },
  {
    label: "Appointments",
    value: 485,
    imageSrc: circle3,
    color: "#fca5a5",
  },
  {
    label: "Revenue",
    value: 62523,
    imageSrc: circle2,
    color: "#fbbf24",
  },
];

const AdminDashboard = () => {
  // State for doctors, patients, and appointments lists

  return (
    <div className="flex flex-col rounded-lg  gap-6 pt-2  w-[75vw]   overflow-y-scroll h-screen">
      {/* <h1 className="text-3xl text-primary-dark font-semibold">
        Welcome Admin{" "}
      </h1> */}
      <div className="grid grid-cols-1 gap-2 rounded-lg shadow-lg md:grid-cols-2 bg-white lg:grid-cols-4">
        {circleGraphData.map((graphData, index) => (
          <CircleGraph key={index} {...graphData} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Doctors />
        <Patients />
      </div>
      <Appointments />
    </div>
  );
};

export default AdminDashboard;
