import { useState } from "react";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Patients from "./Patients";
import Messages from "./Messages";
import Schedule from "./Schedule";
import Tasks from "./Tasks";
import SkinCheckAI from "./SkinCheckAI";
import ProfileSettings from "./ProfileSettings";
import Withdraw from "./Withdraw";
import ChangePassword from "./ChangePassword";

function DoctorDashboard() {
  const [activeOption, setActiveOption] = useState("dashboard");

  return (
    <div className="flex flex-col lg:flex-row  bg-lightgray min-h-screen">
      <div className="lg:w-[22%] pt-4 pl-3 pb-3 lg:pr-0 pr-3 rounded-md">
        <Menu setActiveOption={setActiveOption} activeOption={activeOption} />
      </div>
      <div className="flex-grow bg-lightgray lg:h-screen">
        <div className="p-3 lg:p-6  lg:pt-4 lg:pb-3 h-full box-border">
          {activeOption === "dashboard" && <Dashboard />}
          {activeOption === "patients" && <Patients />}
          {activeOption === "messages" && <Messages />}
          {activeOption === "skincheckai" && <SkinCheckAI />}
          {activeOption === "tasks" && <Schedule />}
          {activeOption === "profile" && <ProfileSettings />}
          {activeOption === "changePassword" && <ChangePassword />}
          {activeOption === "withdraw" && <Withdraw />}
          {/* {activeOption === "schedule" && <Schedule />} */}
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
