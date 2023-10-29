import React, { useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import Appointments from "../Appointments/Appointments";
import Doctors from "../Doctors/Doctors";
import Patients from "../PatientsList/Patients";
import Reviews from "../Reviews/Reviews";
import Transactions from "../Transactions/Transactions";
import InvoiceReports from "../Reports/InvoiceReports";
import ProfileSettings from "../Profile/ProfileSettings";
import ChangePassword from "../changePassword/ChangePassword";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminHealthBlog from "../AddHealthBlog/AdminHealthBlog";
import DoctorAuthentication from "../DoctorAuthentication/DoctorAuthentication";

function Admin() {
  const [activeOption, setActiveOption] = useState("appointments");

  return (
    <div className="flex flex-col lg:flex-row bg-lightgray min-h-screen  ">
      {/* Sidebar */}
      <div className="lg:w-[20vw] pt-4 pl-3 pb-3   lg:pr-0 pr-3 rounded-md">
        <Sidebar
          setActiveOption={setActiveOption}
          activeOption={activeOption}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-lightgray">
        <div className="p-3 lg:p-6  lg:pt-4 lg:pb-3 h-full box-border">
          {activeOption === "dashboard" && <AdminDashboard />}
          {activeOption === "appointments" && <Appointments />}
          {activeOption === "doctors" && <Doctors />}
          {activeOption === "patients" && <Patients />}
          {activeOption === "reviews" && <Reviews />}
          {activeOption === "transactions" && <Transactions />}
          {activeOption === "reports" && <InvoiceReports />}
          {activeOption === "profileSettings" && <ProfileSettings />}
          {activeOption === "changePassword" && <ChangePassword />}
          {activeOption === "addHealthBlog" && <AdminHealthBlog />}
          {activeOption === "doctorAuthentication" && <DoctorAuthentication />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
