import React, { useEffect, useState } from "react";
import { LoginPat, SignupPat, LoginDoc, SignupDoc } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDoctorSignup, setShowDoctorSignup] = useState(false);
  const [showPatientSignup, setShowPatientSignup] = useState(false);
  const [showPatientLogin, setShowPatientLogin] = useState(false);
  const [showDoctorLogin, setShowDoctorLogin] = useState(false);
  const [userType, setUserType] = useState(null);
  const [selectLogin, setSelectLogin] = useState(false);
  const [selectSignup, setSelectSignup] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-primary-dark font-bold text-xl">
              SkinCheck AI
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-primary-dark hover:bg-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <span
                onClick={() => navigate("/doctors")}
                className="text-primary-dark cursor-pointer hover:bg-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Doctors
              </span>
              <span
                onClick={() => navigate("/patient")}
                className="text-primary-dark cursor-pointer hover:bg-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </span>
              <span
                onClick={() => navigate("/healthblog")}
                className="text-primary-dark hover:bg-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Health Blog
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 justify-end md:justify-end flex-grow">
            <div className="md:flex items-center space-x-2">
              {isUserLoggedIn ? (
                <button
                  onClick={() => {
                    // Replace this with your logout logic
                    setIsUserLoggedIn(false);
                  }}
                  className="bg-white border-2 border-primary-dark  hover:bg-primary-dark text-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <div className="md:flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectLogin(!selectLogin);
                      setSelectSignup(false);
                    }}
                    className="bg-white border-2 border-primary-dark  hover:bg-primary-dark text-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setSelectSignup(!selectSignup);
                      setSelectLogin(false);
                    }}
                    className="bg-white border-2 border-primary-dark   hover:bg-primary-dark text-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-1   rounded-md text-primary-light hover:text-primary-dark border-2 border-primary-dark focus:outline-none "
              >
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-primary-dark hover:bg-primary-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/doctors")}
              className="text-primary-dark hover:bg-primary-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Doctors
            </a>
            <a
              onClick={() => navigate("/patient")}
              className="text-primary-dark hover:bg-primary-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </a>
            <a
              href="/healthblog"
              className="text-primary-dark hover:bg-primary-dark hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Health Blog
            </a>
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {selectSignup && (
        <>
          {!showDoctorSignup && !showPatientSignup ? (
            <div className="flex flex-col absolute top-14 right-[7%] p-2  w-44 bg-white z-10 border-2 border-primary-dark rounded-lg   items-center justify-center">
              <button
                onClick={() => setShowPatientSignup(true)}
                className="bg-white  hover:bg-primary-dark border-b text-primary-dark hover:text-white px-3 w-full py-2 rounded-md text-sm font-medium transition-colors duration-300 "
              >
                Sign Up as Patient
              </button>
              <button
                onClick={() => setShowDoctorSignup(true)}
                className="bg-white  hover:bg-primary-dark text-primary-dark hover:text-white px-3 w-full py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Sign Up as Doctor
              </button>
            </div>
          ) : (
            <div className="fixed inset-0 flex items-center justify-center z-10">
              <div
                onClick={() => {
                  setShowDoctorSignup(false);
                  setShowPatientSignup(false);
                }}
                className="absolute inset-0 bg-gray-400 opacity-75"
              ></div>
              <div className="bg-white p-8 z-10  rounded-lg shadow-md">
                {showPatientSignup ? (
                  <SignupPat
                    setShowPatientSignup={setShowPatientSignup}
                    userType={userType}
                    setUserType={setUserType}
                    setShowPatientLogin={setShowPatientLogin}
                    setSelectSignup={setSelectSignup}
                  />
                ) : (
                  <SignupDoc
                    setShowDoctorSignup={setShowDoctorSignup}
                    setShowDoctorLogin={setShowDoctorLogin}
                    userType={userType}
                    setUserType={setUserType}
                    setSelectSignup={setSelectSignup}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* Login Popup */}
      {selectLogin && (
        <>
          {!showDoctorLogin && !showPatientLogin ? (
            <div className="flex flex-col absolute top-14 right-[7%] p-2  w-44 bg-white z-10 border-2 border-primary-dark rounded-lg   items-center justify-center">
              <button
                onClick={() => setShowPatientLogin(true)}
                className="bg-white w-full hover:bg-primary-dark text-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 border-b "
              >
                Log In as Patient
              </button>
              <button
                onClick={() => setShowDoctorLogin(true)}
                className="bg-white w-full hover:bg-primary-dark text-primary-dark hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Log In as Doctor
              </button>
            </div>
          ) : (
            <div className="fixed inset-0 flex items-center justify-center z-10 ">
              <div
                onClick={() => {
                  setShowDoctorLogin(false);
                  setShowPatientLogin(false);
                }}
                className="absolute inset-0 bg-gray-400 opacity-75"
              ></div>
              <div className="bg-white p-8 z-20 rounded-lg shadow-md">
                {showPatientLogin ? (
                  <LoginPat
                    setShowPatientLogin={setShowPatientLogin}
                    setShowPatientSignup={setShowPatientSignup}
                    userType={userType}
                    setSelectLogin={setSelectLogin}
                    setUserType={setUserType}
                  />
                ) : (
                  <LoginDoc
                    setShowDoctorLogin={setShowDoctorLogin}
                    userType={userType}
                    setUserType={setUserType}
                    setSelectLogin={setSelectLogin}
                    setShowDoctorSignup={setShowDoctorSignup}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
