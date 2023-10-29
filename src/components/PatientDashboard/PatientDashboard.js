import React, { useState } from "react";
import Appointments from "./Appointments/Appointments";
import PatientProfile from "./PatientProfile/PatientProfile";
import Sidebar from "../Sidebar/Sidebar";
import Settings from "./Settings/Settings";
import MedicalRecords from "./MedicalRecords/MedicalRecords";
import Messages from "./Messages/Messages";
import Billing from "./Billing/Billing";
import SkinCheckAI from "./SkinCheckAI_P";

const PatientDashboard = () => {
  const [activeOption, setActiveOption] = useState("profile");

  return (
    <div className="flex flex-col lg:flex-row  bg-lightgray min-h-screen ">
      <div className="lg:w-[22%] p-3 lg:pt-4 lg:pr-0 lg:pl-3 lg:pb-3   rounded-md">
        <Sidebar
          setActiveOption={setActiveOption}
          activeOption={activeOption}
        />
      </div>
      <div className="flex-grow bg-lightgray">
        <div className="p-3 sm:p-6  sm:pt-4 sm:pb-3 h-full">
          {activeOption === "appointments" && <Appointments />}
          {activeOption === "profile" && <PatientProfile />}
          {activeOption === "settings" && <Settings />}
          {activeOption === "skincheckai" && <SkinCheckAI />}
          {/* {activeOption === "records" && <Records />} */}
          {activeOption === "medical-records" && <MedicalRecords />}
          {activeOption === "billing" && <Billing />}
          {activeOption === "messages" && <Messages />}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
