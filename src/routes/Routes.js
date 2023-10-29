import React from "react";
import { Routes as DomRoutes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home/Home";
import DoctorsPage from "../components/Doctors/Doctors";
import Navbar from "../components/Navbar/Navbar";
import PatientDashboard from "../components/PatientDashboard/PatientDashboard";
import Footer from "../components/Footer/Footer";
import BookAppointment from "../components/BookAppointment/BookAppointment";
import DoctorDashboard from "../components/DoctorDashboard/DoctorDashboard";
import Payment from "../components/Payment/Payment";
import HealthBlog from "../components/HealthBlog/HealthBlog";
import Admin from "../admin/Admin/Admin";
import LoginAdmin from "../admin/Login/AdminLogin";
import RoomPage from "../components/VideoCall/Rome";
import Videocall from "../components/VideoCallComp/videocall";
import VideoCallRecipient from "../components/VideoCallRecipient/VideoCallRecipient";
const Routes = () => {
  let location = useLocation();

  return (
    <div className="overflow-y-auto !grid-rows-[auto_1fr_auto] ">
      {location.pathname !== "/admin" && location.pathname !== "/adminlogin" ? (
        <>
          <Navbar />
          <DomRoutes location={location}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/doctors" element={<DoctorsPage />} />
            <Route
              exact
              path="/bookappointment"
              element={<BookAppointment />}
            />
            <Route exact path="/patient" element={<PatientDashboard />} />
            <Route exact path="/doctor" element={<DoctorDashboard />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/healthblog" element={<HealthBlog />} />
            <Route exact path="/videohome" element={<RoomPage />} />
            <Route exact path="/videocall" element={<Videocall />} />
            <Route exact path="/videocallrec" element={<VideoCallRecipient />} />
          </DomRoutes>
          <Footer />
        </>
      ) : (
        <DomRoutes location={location}>
          <Route exact path="/adminlogin" element={<LoginAdmin />} />
          <Route exact path="/admin" element={<Admin />} />
        </DomRoutes>
      )}
    </div>
  );
};

export default Routes;
