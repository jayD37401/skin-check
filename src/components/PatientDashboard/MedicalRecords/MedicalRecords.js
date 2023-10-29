import { useState } from "react";
import RenderMedicalRecords from "./RenderMedicalRecords";
import RenderPrescriptions from "./RenderPrescriptions";

export default function MedicalRecords() {
  const [activeTab, setActiveTab] = useState("medicalRecords");

  return (
    <div className=" bg-white h-full rounded-lg shadow-md p-4">
      <div className="flex justify-center  mb-4 font-semibold border-b-2 lg:mx-10 mx-2">
        <button
          className={`bg-white  w-full   outline-none text-black  py-3 -mr-1   rounded  ${
            activeTab === "medicalRecords"
              ? " border-b-blue-500 border-b-4 text-blue-500 -mb-[1px]"
              : "hover:text-blue-500 hover:-mb-[1px] hover:border-gray-300 hover:border-b-2"
          }`}
          onClick={() => setActiveTab("medicalRecords")}
        >
          Medical Records
        </button>
        <button
          className={`bg-white  text-black    w-full py-3 outline-none  rounded ${
            activeTab === "prescriptions"
              ? "border-blue-500 border-b-4  text-blue-500 -mb-[1px]"
              : "hover:text-blue-500 hover:-mb-[1px] hover:border-gray-300 hover:border-b-2"
          }`}
          onClick={() => setActiveTab("prescriptions")}
        >
          Prescriptions
        </button>
      </div>
      {activeTab === "medicalRecords" && <RenderMedicalRecords />}
      {activeTab === "prescriptions" && <RenderPrescriptions />}
    </div>
  );
}
